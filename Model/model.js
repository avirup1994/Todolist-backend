const mongoose = require('mongoose');
const myschema = mongoose.Schema;
let signup = new myschema({

    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    mobileNumber: {
        type: Number,
        default: ''
    },
    countrycode: {
        type: String,
        default: ''
    },
    UserId: {
        type: String,
        default: ''
    },
    Password: {
        type: String,
        default: ''
    },
    CreatedOn:{
        type:Date,
        default:''
    },
    friends:{
        type:[{
          friendId:{
            type:String,
            default:''
          },
        
          friendName:{
            type:String,
            default:''
          },
    
        }],
      },
      friendRequestRecieved:{
        type:[{
          friendId:{
            type:String,
            default:''
          },
        
          friendName:{
            type:String,
            default:''
          },
    
        }],
      },
      friendRequestSent:{
        type:[{
          friendId:{
            type:String,
            default:''
          },
        
          friendName:{
            type:String,
            default:''
          },
    
        }],
      },

})
mongoose.model('Signup', signup);
