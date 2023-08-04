import { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface Database {
  readonly users: UsersTable;
}

export interface UsersTable {
  readonly id: Generated<string>;
  readonly email: string;
}

export type User = Selectable<UsersTable>;
export type NewUser = Insertable<UsersTable>;
export type UpdateUser = Updateable<UsersTable>;
