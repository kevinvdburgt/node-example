import { Router } from 'express';
import { update } from '../modules/users/users.controller.js';

const router: Router = Router();

router.patch('/users/update', update);

export default router;
