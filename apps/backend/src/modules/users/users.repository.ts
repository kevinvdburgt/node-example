import { database } from '../database/database.service.js';

export const update = async (id: string, email: string) => {
  return await database.updateTable('users').where('id', '=', id).set({ email }).execute();
};
