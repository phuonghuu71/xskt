import Lotteries from '../models/lotteries.js';
import Provinces from '../models/provinces.js';

// get Lotteries list
export const getLotteries = async (req, res) => {
    try {
        const getLotteries = await Lotteries.find();
        res.status(200).json(getLotteries);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

// create single Lotteries
export const createLotteries = async (req, res) => {
    const lottery = req.body;
    const newLottery = new Lotteries(lottery);
    try {
        await newLottery.save();
        res.status(201).json(newLottery);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};
