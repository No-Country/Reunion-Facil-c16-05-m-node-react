import { Router } from 'express';
const routerUser = Router();
routerUser.get('/users',getUsers);
routerUser.post('/users',createUser);
routerUser.path('/users/:id',updateUser);
routerUser.delete('/users/',deleteUser)
export default routerUser();

