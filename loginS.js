import mongoose from 'mongoose';
const login = new mongoose.Schema({
    username:{
        required: true,
        type: String,
        unique: true
    },
    Email: {
        required: true,
        type: String,
        unique: true
    },
    Password:{
        required: true,
        type: String
    }
});
const SC = new mongoose.model('SC','login');
export default SC;
