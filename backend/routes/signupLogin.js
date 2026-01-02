const express = require("express");
const router = express.Router();
const session = require("express-session");
const bcrypt = require("bcrypt");
const User = require('./../models/user');

//Middleware
router.use(express.json());

router.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,

    cookie:{
        httpOnly:true,
        secure:true,
        sameSite:"strict",
        maxAge: 1000 * 60 * 60 * 1000
    }
}));

//Auth Middleware
const isAuth = ()=>{
    if(req.session.userID) return next();
    return res.status(401).json({message: "Unauthorized"});
};


//Signup
router.post('./signup', async(req,res)=>{

    //check username exists or not
    const newUser = new User(req.body);
    const response = await newUser.save();
    console.log("Data saved")

    const {email, password} = req.body;

    if(!email || !password)
    return res.status(400).json({ message: "Missing fields" });

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        const user = await UserActivation.create({email, password: hashedPassword});
        res.json({message:"User registered", userId: user.id});
    } catch(err){
        return res.status(400).json({message: "User already exists"});
    }
});



router.post('./login', async(req,res)=>{
    
});

module.exports = router;