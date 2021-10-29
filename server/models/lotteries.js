import mongoose from 'mongoose';

const lotteriesSchema = mongoose.Schema({
    province: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provinces',
    },
    prize: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prizes',
    },
    luckyNumber: String,
    createdAt: {
        type: Date,
        default: new Date()
            .toISOString({ timeZone: 'Asia/Ho_Chi_Minh' })
            .slice(0, 10),
    },
});

const Lotteries = mongoose.model('Lotteries', lotteriesSchema);

export default Lotteries;
