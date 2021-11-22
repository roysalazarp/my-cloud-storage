import IDatabase from "../Database.interface";
import { makeDb } from "../../../../lib/db";


interface FindUserByEmailInput {
  table: 'users',
  args: {
    email: string, 
  }
}

interface FindUserByEmailOutput {
  user: {
    id: string,
    password: string,
    email: string,
    createdAt: string,
    updatedAt: string
  }
}

export class FindUserByEmail implements IDatabase<FindUserByEmailInput, FindUserByEmailOutput> {
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

  public async execute(input: FindUserByEmailInput) {
    const values = [
      input.args.email
    ]

    const query = {
      text: `SELECT * FROM ${input.table} WHERE "email" = $1`,
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
      user: user as FindUserByEmailOutput["user"]
    }
  }
}

export default new FindUserByEmail(makeDb)