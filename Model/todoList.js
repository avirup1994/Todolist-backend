const mongoose=require('mongoose');
const List=mongoose.Schema;

let todoList=new List({
    UserId:{
        type:String,
        default:'',
        index:true,
        unique:true
    },
    ListId:{
        type:String,
        default:'',
    },
    ListName:{
        type:String,
        default:''
    },
    listModifierId: {
        type: String,
        default: ''
      },
      listModifierName: {
        type: String,
        default: ''
      },
  ItemName:{
      type:Array,
      default:''
  },
  ItemId:{
   type:Array,
   default:''
  },
  SubItemName:{
      type:Array,
      default:''
  },
  SubItemId:{
      type:Array,
      default:''
  },
})

mongoose.model('todoList',todoList);
