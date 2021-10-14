import Lotteries from '../models/lotteries.js';
import Provinces from '../models/provinces.js';

// get Lotteries list
export const getLotteries = async (req, res) => {
    const { province, date } = req.query;
    try {
        console.log(province, new Date(date).toISOString().slice(0, 10));
        const getLotteries = await Lotteries.find({
            province: province,
            createdAt: new Date(date).toISOString().slice(0, 10),
        })
            .populate('prize', 'code name')
            .populate('province', 'code name');
        res.status(200).json({
            data: getLotteries,
        });
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
