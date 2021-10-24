import Lotteries from '../models/lotteries.js';
import mongoose from 'mongoose';

// get Lotteries list
export const getLotteries = async (req, res) => {
    const { province, date } = req.query;
    try {
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

// update Lottery
export const updateLottery = async (req, res) => {
    const { id } = req.params;
    const { luckyNumber } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No lottery with id: ${id}`);
        const updatedLottery = { luckyNumber, _id: id };
        await Lotteries.findByIdAndUpdate(id, updatedLottery, { new: true });
        res.json(updatedLottery);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

// delete Lottery
export const deleteLottery = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No lottery with id: ${id}`);
        await Lotteries.findByIdAndRemove(id);
        res.json({ message: 'Lottery deleted successfully' });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};
