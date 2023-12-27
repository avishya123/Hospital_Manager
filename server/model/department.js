const mongoose=require('mongoose')

const DeptSchema=new mongoose.Schema({
    name:String,
    year:String,
    discription:String,
    head:String,
    image:String
})
const DeptModel=mongoose.model('Dept',DeptSchema);
module.exports=DeptModel