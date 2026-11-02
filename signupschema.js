import mongoose from 'mongoose';
const signup = new mongoose.Schema({
    FirstName:{
        type: String,
        required : true, 
    },
    SecondName : {
        type: String,
        required : false
    },
    LastName : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique: true
    },
    Gender:{
        type : Boolean,
        enum :['Male','Female', 'other'],
        required: true
    },
    Mobile : {
        required : true,
        type: Number,
        unique : true
    },
    Email : {
        required: true,
        type : String,
        unique : true
    
    },
    Password : {
        required: true,
        type: String
    },
    confirmPassword:{
        type: String,
        required:true
    },
    Address : {
        Building : {
            required : true,
            type : String,
        },
        lane: {
            required : true,
            type : String
        },
        lane2 : {
            required : false,
            type : String
        },
        landmark : {
            required : false,
            type: String
        },
        Pincode : {
            required: true,
            type: Number
        }

    }
});
const schema = new mongoose.model('schema','signup');
export default schema;