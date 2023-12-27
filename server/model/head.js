const mongoose=require('mongoose')

const HeadSchema=new mongoose.Schema({
    name:String,
    empnumber:String,
    age:Number,
    image:String,
    dept:String,
    discription:String,
    
})
const HeadModel=mongoose.model('head',HeadSchema);
module.exports=HeadModel