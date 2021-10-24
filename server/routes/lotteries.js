import express from 'express';
import {
    getLotteries,
    createLotteries,
    deleteLottery,
    updateLottery
} from '../controllers/lotteries.js';

const lotteriesRoute = express.Router();

// Users
lotteriesRoute.get('/', getLotteries);
lotteriesRoute.post('/', createLotteries);
lotteriesRoute.post('/:id', updateLottery);
lotteriesRoute.delete('/:id', deleteLottery);

export default lotteriesRoute;
