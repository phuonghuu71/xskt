import Prizes from '../models/prizes.js';

// get prize list
export const getPrizes = async (req, res) => {
    try {
        const getPrizes = await Prizes.find();
        res.status(200).json(getPrizes);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

// create single prize
export const createPrize = async (req, res) => {
    const prize = req.body;
    const newPrize = new Prizes(prize);
    try {
        await newPrize.save();
        res.status(201).json(newPrize);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};
