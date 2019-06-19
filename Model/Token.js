const mongoose=require('mongoose');
const myToken=mongoose.Schema;

const Auth = new myToken({
UserId:{
        type:String,
        default:''
    },
authToken:{
    type:String,
    default:''
},
secretkey:{
    type:String,
    default:''
}
})

mongoose.model('Auth',Auth);
