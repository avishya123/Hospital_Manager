const mongoose=require('mongoose')

const EmpSchema=new mongoose.Schema({
    name:String,
    empnumber:String,
    age:Number,
    image:String,
    dept:String,
    discription:String,
    
})
const EmpModel=mongoose.model('employee',EmpSchema);
module.exports=EmpModel