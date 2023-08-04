import * as authRepository from './auth.repository.js';

export const register = async (email: string) => {
  const exists = await authRepository.findUserByEmail(email);

  if (exists) {
    throw new Error('User already exists');
  }

  return await authRepository.createUser(email);
};

export const login = async (email: string) => {
  const user = await authRepository.findUserByEmail(email);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};
