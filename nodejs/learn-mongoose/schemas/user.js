const mongoose = require('mongoose');

const {Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        required: true,
        unique:true,
    },
    age: {
        type:Number,
        required: true,
    },
    married: {
        type:Boolean,
        required: true,
    },
    comment : String,
    createAt:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);//스키마와 몽고디비 컬렉션을 연결하는 모델을 만듬.