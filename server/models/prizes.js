import mongoose from 'mongoose';

const prizesSchema = mongoose.Schema({
    code: String,
    name: String,
});

const Prizes = mongoose.model('Prizes', prizesSchema);

export default Prizes;