import express from 'express';

import { getUsers, createUser, loginUser} from '../controllers/users.js';

const usersRoute = express.Router();

// Users
usersRoute.get('/', getUsers);
usersRoute.post('/', createUser);
usersRoute.post('/login', loginUser);

export default usersRoute;
