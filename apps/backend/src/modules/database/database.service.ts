import { Kysely } from 'kysely';
import pg from 'pg';
import { Database } from './types/database.js';
import { PostgresDialect } from 'kysely';

export const database = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new pg.Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
});
