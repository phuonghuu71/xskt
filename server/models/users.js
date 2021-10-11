import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    lotteries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lotteries',
        },
    ],
});

const Users = mongoose.model('Users', usersSchema);

export default Users;
