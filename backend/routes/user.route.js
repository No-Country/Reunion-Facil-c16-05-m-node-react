import { Router } from 'express';
import {getAll, userSearch,createUser,updateUser,deleteUser} from '../controllers/user.controller.js';
import {validateSchema} from '../utils/validateSchema.js';
import {userSchema} from '../schemas/userSchema.js'

const userRouter = Router();

userRouter.get('/user', getAll);
//se cambia de get a post 
userRouter.post('/user/search', validateSchema(userSchema), userSearch);
userRouter.post('/user', validateSchema(userSchema),createUser);
userRouter.patch('/user/:id', validateSchema(userSchema),updateUser);
userRouter.delete('/user/:id',validateSchema(userSchema),deleteUser);
export default userRouter;