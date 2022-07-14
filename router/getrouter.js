const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const PORT = process.env.PORT;
const User = require('../Model/userSchema.js')
const authenticate = require('../middleWare/authenticate');
const token = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const { application } = require('express');
require('../DB/Conn')
router.use(cookieParser());
router.get('/',(req,res)=>{
    res.send('Hiii user')
});
router.post('/register',async(req,res)=>{
    
    const {name,email,phone,password,cpassword} = req.body;
    
    if(!name || !email || !phone || ! password || !cpassword){
        res.status(400).json( {message : "Please Fill the data properly"})
    }
    try{
    
    const userExist = await User.findOne({email
    });
        if(userExist){
            res.status(422).json({message : "Email Already Exist"})
        } 
        
        console.log("user register successfully");
        if(password != cpassword){
            res.status(422).json({message : "Password is not match"})
        }
        const user = new User({name,email,phone,password,cpassword});
        await user.save();
         res.status(201).json({message : "user register successfully "});
    }catch(err){
        console.log(err);
    }
});

router.post('/login',async(req,res)=>{
    console.log('easy');
    const {email,password} = req.body;
    console.log(email);
    console.log(password);
    
    if(!email || ! password ){
       return res.status(422).json( {Error : "Please Fill the data properly"})
    }
    try{
        let token; 
        const userExist = await User.findOne({ email: email });
        
        if(!userExist){
           return res.status(422).json({Error : "Invalid credentials"})
        }
       // console.log("hello");
        const isMatch = await bcrypt.compare(password, userExist.password);  // In bcrypt there is only two function 1->hash 2->compare
        token = await userExist.generateAuthToken();
     //   console.log(token);
        res.cookie('jwtoken', token, {
            expires: new Date(Date.now() + 2568900),
            httpOnly: true
        });
      
        if(isMatch){
            console.log("Match");
            res.status(201).json({message : "You are login "})
        }else{
            console.log("Not Match");
            return res.status(422).json({Error : "Invalid credentials"})
        }
        
    }catch(err){
        console.log(err);
    }
});
router.get('/Info',authenticate, (req,res)=>{
   // console.log(`Heelo users ->${req.cookies.jwtoken}`);
    console.log(req.rootUser)
    res.send(req.rootUser);
});
router.get('/contact', (req, res) => {
        res.send('Hiii Contact')
});
router.get('/login',(req,res)=>{
    res.send('Hiii Login')
});
router.get('/register',(req,res)=>{
    res.send('Hiii Register')
});
router.get('/getdata',authenticate,(req,res)=>{
    res.send(req.rootUser);
});
router.post('/storeData',authenticate, async(req, res) => {
    const {email,header,input1,input2,input3,input4,input5} = req.body;
    if(!input1 ){
        res.status(400).json( {message : "Please Fill the data properly"})
    }
    try{
        
    const userExist = await User.findOne({_id : req.userId });
        if(!userExist){
            res.status(422).json({message : "User Not Exist"})
        }
        let message;
        if(header == 'personalInfo'){
            message = await userExist.addpersonalInfo(input1, input2, input3, input4, input5);
        } else if (header == 'education') {
            message = await userExist.addeducation( input1, input2, input3, input4, input5);
            
        } else if (header == 'experienceInfo') {
            
            message = await userExist.addexperienceInfo( input1, input2, input3, input4, input5);
            
        }else if (header == 'skillInfo') {
            message = await userExist.addskillInfo( input1, input2, input3);
            
        }else if (header == 'projectInfo') {
            message = await userExist.addprojectInfo( input1, input2, input3,input4);
            
        }
        console.log(header);
        await userExist.save();
        res.status(200).json({ message: 'user contact sucessfully' });
    }catch(err){
        console.log(err);
    }
})
module.exports = router;


/*
Without async and Await 
router.post('/register',(req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;
    console.log("hello");
    if(!name || !email || !phone || !work || ! password || !cpassword){
        res.status(400).json( {message : "Please Fill the data properly"})
    }
    console.log("hiii");
    User.findOne({email:email}).then((userExist) => {
        
            if(userExist){
                
                res.status(500).json({message : "Email Already Exist"})
            }else{
                
                const user = new User({name,email,phone,work,password,cpassword});
               
                user.save().then(()=>{
                    console.log("hoooiii");
                    res.status(201).json({message : "user register successfully "});
                }).catch((err) =>res.status(500).json({Error :"Failed to register"}))
            }
    }).catch(err =>{message : "Error";})
}); */