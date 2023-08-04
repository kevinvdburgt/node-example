import * as userRepository from './users.repository.js';

export const update = async (userId: string, email: string) => {
  await userRepository.update(userId, email);
};
