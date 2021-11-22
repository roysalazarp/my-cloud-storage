import Connection from './Connection';
import postgres from './Postgres';

export const makeDb = new Connection(postgres).connect();