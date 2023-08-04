import { Request, Response } from 'express';
import * as authService from './auth.service.js';

export const register = async (request: Request, response: Response) => {
  // @TODO: Validate request.body

  const user = await authService.register(request.body.email);

  response.status(201).send(user);
};

export const login = async (request: Request, response: Response) => {
  // @TODO: Validate request.body

  const user = await authService.login(request.body.email);

  response.status(200).send(user);
};
