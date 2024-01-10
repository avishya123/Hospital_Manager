const express = require('express')  //import express
const cors = require('cors')  
const multer = require('multer')  
const path = require('path')   
const mongoose = require('mongoose') 
const LoginModel = require('./model/User') 
const HeadModel = require('./model/head')
const EmpModel = require('./model/employee')
const DeptModel = require('./model/department')

const app = express()    ;      
app.use(cors());
app.use(express.json())  
app.use(express.static('public'))

mongoose.connect("mongodb://127.0.0.1:27017/Hospital")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });


const PORT = process.env.PORT || 5000

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{    
        cb(null, 'public/images')  
    },
    filename:(req, file, cb)=>{    
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload=multer({
    storage: storage
})

// app.post('/login',(req,res)=>{
//     LoginModel.findOne({email:email})
//     .then(user=>res.json({status:'success',role:user.role}))
//     .catch(err=>res.json(err))
// }),
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    LoginModel.findOne({ email: email, password: password })
      .then(user => {
        if (user) {
          res.json({ status: 'success', role: user.role });
        } else {
          res.status(401).json({ status: 'failure', message: 'Invalid email or password' });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      });
  });
  
app.post('/createdept',upload.single('file'),(req,res)=>{
    const {name,year,discription,head} = req.body;
    DeptModel.create({image: req.file.filename, ...req.body})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.get('/show',(req,res)=>{
    DeptModel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.get('/showdept/:id',(req,res)=>{
    const id=req.params.id;
    DeptModel.findById({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),

app.put('/updatedept/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    DeptModel.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        year: req.body.year,
        discription: req.body.discription,
        head: req.body.head,
        image: req.file.filename, // Assuming 'image' is the key for the file in your schema
      }
    )
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  });
app.delete('/deletedept/:id',(req,res)=>{
    const id = req.params.id; 
    DeptModel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),

//head
app.post('/createhead',upload.single('file'),(req,res)=>{
    const {name,empnumber,age,discription,dept} = req.body;
    HeadModel.create({image: req.file.filename, ...req.body})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.get('/showh',(req,res)=>{
    HeadModel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.get('/showhead/:id',(req,res)=>{
    const id=req.params.id;
    HeadModel.findById({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.put('/updatehead/:id',upload.single('file'),(req,res)=>{
    const id=req.params.id;
    HeadModel.findByIdAndUpdate({_id:id},
        {
            name:req.body.name,
           empnumber:req.body.empnumber,
           age:req.body.age,
           image: req.file.filename,
           dept:req.body.dept,
            discription:req.body.discription,
           
        })
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),

app.delete('/deletehead/:id',(req,res)=>{
    const id = req.params.id; 
    HeadModel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
//profiles
app.get('/showprofilehead/:name', (req, res) => {
    const {name } = req.params;
    // const id = req.params.id; 
    HeadModel.findOne({ name: name })
      .then(user => res.json(user))
      .catch(err => res.json(err));
});
app.get('/showprofiledept/:dept', (req, res) => {
    const { dept } = req.params;
    // const id = req.params.id; 
    DeptModel.findOne({ name: dept })
        .then(department => res.json(department))
        .catch(err => res.json(err));
});


//employee
app.post('/createemp',upload.single('file'),(req,res)=>{
    const {name,empnumber,age,discription,dept} = req.body;
    EmpModel.create({image: req.file.filename, ...req.body})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.get('/showe',(req,res)=>{
    EmpModel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.get('/showemp/:id',(req,res)=>{
    const id=req.params.id;
    EmpModel.findById({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.put('/updateemp/:id',upload.single('file'),(req,res)=>{
    const id=req.params.id;
    EmpModel.findByIdAndUpdate({_id:id},
        {
            name:req.body.name,
           empnumber:req.body.empnumber,
           age:req.body.age,
           image: req.file.filename,
           dept:req.body.dept,
            discription:req.body.discription,
           
        })
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.delete('/deleteemp/:id',(req,res)=>{
    const id = req.params.id; 
    EmpModel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),

app.listen(PORT,()=>console.log("server is running"))