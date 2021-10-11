import express from 'express';

import { getPrizes, createPrize } from '../controllers/prizes.js';

const prizesRoute = express.Router();

// Users
prizesRoute.get('/', getPrizes);
prizesRoute.post('/', createPrize);

export default prizesRoute;
