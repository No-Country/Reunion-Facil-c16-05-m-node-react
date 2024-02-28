import { Router } from 'express';
import {getAll, userSearch} from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/user', getAll);
userRouter.get('/user/search', userSearch);

export default userRouter;