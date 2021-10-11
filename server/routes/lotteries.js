import express from 'express';

import { getLotteries, createLotteries } from '../controllers/lotteries.js';

const lotteriesRoute = express.Router();

// Users
lotteriesRoute.get('/', getLotteries);
lotteriesRoute.post('/', createLotteries);

export default lotteriesRoute;
