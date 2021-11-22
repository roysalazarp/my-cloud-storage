import IDatabase from "../Database.interface";
import { makeDb } from "../../../../lib/db";

interface CreateUserInput {
  table: 'users',
  args: {
    id: string, 
    email: string, 
    password: string, 
  }
}

interface CreateUserOutput {
  user: {
    id: string, 
    email: string, 
    password: string, 
    createdAt: string,
    updatedAt: string,
  }
}

export class CreateUser implements IDatabase<CreateUserInput, CreateUserOutput> {
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

  public async execute(input: CreateUserInput) {
    const date = new Date()
    const values = [
      input.args.id, 
      input.args.email, 
      input.args.password, 
      date, 
      date
    ]

    const query = {
      text: `INSERT INTO ${input.table} ("id", "email", "password", "createdAt", "updatedAt") VALUES($1, $2, $3, $4, $5) RETURNING *`,
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
    const results = await pool
    const user = {
      id: results[0].id,
      email: results[0].email,
      password: results[0].password,
      createdAt: results[0].createdAt,
      updatedAt: results[0].updatedAt,
    }
    return {
      user: user as CreateUserOutput["user"]
    }
  }
}

export default new CreateUser(makeDb)