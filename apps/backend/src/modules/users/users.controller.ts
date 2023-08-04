import { Request, Response } from 'express';
import * as usersService from './users.service.js';

export const update = async (request: Request, response: Response) => {
  // @TODO: Check for authentication + input validation

  await usersService.update(request.body.id, request.body.email);

  response.status(200);
};
