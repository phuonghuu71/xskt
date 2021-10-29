import express from 'express';

import { getUsers, createUser, loginUser, loginAuth} from '../controllers/users.js';

import auth from '../middleware/auth.js';

const usersRoute = express.Router();

// Users
usersRoute.get('/', getUsers);
usersRoute.get('/welcome', auth, loginAuth)
usersRoute.post('/', createUser);
usersRoute.post('/login', loginUser);

export default usersRoute;
