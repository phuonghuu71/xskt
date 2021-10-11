import mongoose from 'mongoose';

const provincesSchema = mongoose.Schema({
    code: String,
    name: String,
});

const Provinces = mongoose.model('Provinces', provincesSchema);

export default Provinces;
