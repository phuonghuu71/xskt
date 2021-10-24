import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Users = mongoose.model('Users', usersSchema);

export default Users;
