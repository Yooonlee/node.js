const mongoose = require('mongoose');

const connect = () =>{
    if(process.env.NODE_ENV !== 'production'){
        moongoose.set('debug', true);
    }
    mongoose.connect('mongodb://Yooonlee:lky271600*@localhost:27017/admin', {
        dbName:'nodejs',
        useNewUrlParser:true,
    },(error)=>{
        if(error){
            console.log('몽고디비 연결에러', error);
        }else{
            console.log('연결 성공');
        }
    });
};

module.exports = connect;