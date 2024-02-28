import { Router } from 'express';
import {getAll, userSearch,createUser,updateUser,deleteUser} from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/user', getAll);
userRouter.get('/user/search', userSearch);
userRouter.post('/user',createUser);
userRouter.patch('/user/:id',updateUser);
userRouter.delete('/user/:id',deleteUser);
export default userRouter;