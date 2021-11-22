import IDatabase from "../Database.interface";
import { makeDb } from "../../../../lib/db";

interface FindUserByIdInput {
  table: 'users',
  args: {
    id: string, 
  }
}

interface FindUserByIdOutput {
  user: {
    id: string,
    password: string,
    email: string,
    createdAt: string,
    updatedAt: string
  }
}

export class FindUserById implements IDatabase<FindUserByIdInput, FindUserByIdOutput> {
  private Connection: typeof makeDb;

  constructor(
    Connection: typeof makeDb,
  ) {
    this.Connection = Connection;
  }

  private connect () {
    const pool = this.Connection.connect()
    return pool
  }

  public async execute(input: FindUserByIdInput) {
    const values = [
      input.args.id
    ]

    const query = {
      text: `SELECT * FROM ${input.table} WHERE "id" = $1`,
      values: values,
    }
    
    const pool = this.connect().then(client => {
      return client
        .query(query)
        .then(res => {
          client.release()
          return res.rows
        }).catch(err => {
          client.release()
          console.log(err.stack)
          throw new Error(err.stack);
        })
    })

    const result = await pool

    if (result.length === 0) {
      return {
        user: null
      }
    }


    const user = {
      id: result[0].id,
      email: result[0].email,
      password: result[0].password,
      createdAt: result[0].createdAt,
      updatedAt: result[0].updatedAt,
    }
    return {
      user: user as FindUserByIdOutput["user"]
    }
  }
}

export default new FindUserById(makeDb)