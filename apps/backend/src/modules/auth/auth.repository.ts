import { database } from '../database/database.service.js';

export const findUserByEmail = async (email: string) => {
  return await database.selectFrom('users').where('email', '=', email).selectAll().executeTakeFirst();
};

export const createUser = async (email: string) => {
  return await database
    .insertInto('users')
    .values({
      email,
    })
    .returning(['users.id'])
    .executeTakeFirstOrThrow();
};
