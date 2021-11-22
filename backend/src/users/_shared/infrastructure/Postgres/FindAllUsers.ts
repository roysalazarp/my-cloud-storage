import IDatabase from "../Database.interface";
import { makeDb } from "../../../../lib/db";

interface FindAllUsersInput {
  table: 'users'
}

interface FindAllUsersOutput {
  users: Array<{
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string
  }>
}

export class FindAllUsers implements IDatabase<FindAllUsersInput, FindAllUsersOutput> {
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

  public async execute(input: FindAllUsersInput) {
    const query = {
      text: `SELECT * FROM ${input.table}`
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
        users: null
      }
    }


    const users = result.map(user => {
      return {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    })
    
    return {
      users: users as FindAllUsersOutput["users"]
    }
  }
}

export default new FindAllUsers(makeDb)