// const express = require("express");
import pkg from "express";
const express=pkg;

// const mysql = require("mysql");
import mysql from 'mysql';
// const cors = require("cors");
import cors from 'cors';
// const bodyParser = require("body-parser");
import bodyParser from "body-parser";
// const cookieParser = require("cookie-parser");
import cookieParser from "cookie-parser";

// const fetch=require("node-fetch");
import fetch from "node-fetch";

// const insta =require("instamojo-nodejs");
import insta from "instamojo-nodejs"; 


// const {body,validationResult}=require("express-validator");
import {body,validationResult} from "express-validator";  

import flash from 'connect-flash';




// const session = require("express-session");
import session from "express-session";




// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
// const { OAuth2Client } = require('google-auth-library')
import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client('919173866270-dvha1je95f1f383dmupagnmrcvjfmk7i.apps.googleusercontent.com')


// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";
// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";

// const { response, request } = require("express");
import { response,request } from "express";
const saltRounds = 10;



const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);


app.use(flash());


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "register"
});


app.post("/register",

[
    body('email').trim().isEmail().withMessage('email must be a valid email').normalizeEmail().toLowerCase(),
    body('password').trim().isLength(5).withMessage('password length short,minimum 5 characters required'),
    ]


,(req, res) => {



    const username = req.body.username
    const email = req.body.email
    const contactno = req.body.contactno
    const profession = req.body.profession
    const userid = req.body.userid
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword


    // const errors=validationResult(req);


    // if (!errors.isEmpty()) {
     
    //     errors.array().forEach(error=>{
    //        req.flash('error',error.msg)
           
            
    //     })
    //     // res.json('register',{messages:req.flash()})
    //     // res.status('register').json({messages:req.flash()})
    //     res.json({messages:req.flash()})
        
    // }

   



    db.query("SELECT * FROM signup WHERE email = ?;",
        email,
        (err, result) => {
            // console.log(err);




            if (result.length > 0) {

                res.send("user already exist")

            }
            else {


                bcrypt.hash(password, saltRounds, (err, hash) => {
                    if (err) {
                        console.log(err);
                    }


                    db.query("insert into signup(username,email,contactno,profession,userid,password,confirmpassword) values(?,?,?,?,?,?,?)",
                        [username, email, contactno, profession, userid, hash, hash],
                        (err, result) => {
                            console.log(err);
                            if (result) {
                                // console.log("successfull")
                                res.send("successfull")

                            }
                        });




                })



            }
        })





});


const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        res.send("yo ,we need a token please give it to next time");
    }
    else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "you failed to authenticate" });
            }
            else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};




app.get("/isUserAuth", verifyJWT, (req, res) => {
    res.send("yo, you are authenticated, congrats");
})


app.get("/login01", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    }
    else {
        res.send({ loggedIn: false });
    }
});


app.post("/login", (req, res) => {


    const userid = req.body.userid
    const password = req.body.password

    db.query("select * from signup where userid=?;",
        userid,
        (err, result) => {

            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {


                        const id = result[0].id
                        const token = jwt.sign({ id }, "jwtSecret", {
                            expiresIn: 300,
                        })
                        req.session.user = result;


                        // console.log(req.session.user=result);
                        res.json({ auth: true, token: token, result: result });
                    }
                    else {
                        res.json({ auth: false, message: "wrong username / password combination" });
                    }
                })


            }
            else {

                res.json({ auth: false, message: "user dosnt exist" });
            }
        });
});







app.listen(3030, () => {

    console.log("running server");
});








// forgot password..................................................................


// let user={

//     id:"sdfjhkdfjhgdg",
//     email:"lijobyaa88@gmail.com",
//     password:"123123"
// }




const JWT_SECRET = 'abc123'



app.post('/forgot-password', (req, res, next) => {

    const email = req.body.forgotpassemail;


    db.query("select * from signup where email=?;",
        [email],
        (err, result) => {



            if (err) {
                res.send({ err: err });
            }


            if (result.length > 0) {
                global.id = result[0].id;
                global.password = result[0].password;
                console.log(global.password)

                global.secret = JWT_SECRET + global.password;
                const secret = global.secret;
                const payload = {


                    id: global.id,
                    email: email

                }

                global.email = email;


                const token = jwt.sign(payload, secret, { expiresIn: '15m' })

                const link = `http://localhost:3000/reset-password/${id}/${token}`
                console.log(id)
                console.log(link)

                // res.send('password reset link has been sent to your email...');

                res.send(link);

                let transporter = nodemailer.createTransport({

                    service: 'gmail',
                    auth: {

                        user: 'lijobyaa88@gmail.com',
                        pass: 'lissamma@1988'
                    }
                });


                let mailOptions = {
                    from: 'lijobyaa88@gmail.com',
                    to: email,
                    subject: 'test mail',
                    text: 'Please click on the following link to reset your password' + link
                };

                transporter.sendMail(mailOptions, function (err, data) {

                    if (err) {
                        console.log('Error Occurs');
                    }
                    else {
                        console.log('email sent!!!')
                    }
                });




            }
            else {

                res.json({ auth: false, message: "user dosnt exist" });
            }
        });




    //make sure user exist in database

    // if(email !== user.email)
    // {
    //     res.send("user not registered");
    //     return;
    // }


    //user exist and now create a one time link valid for 15 minutes

})





app.post('/resetpassword', (req, res, next) => {

    const resetpassword = req.body.resetpassword;
    const uid = parseInt(req.body.id);
    const token = req.body.token;


    const sqlid = global.id;
    const sqlpassword = global.password;
    console.log(sqlpassword)
    console.log(token);


    console.log(sqlid)
    console.log(uid);

    // check if this id exist in the database



    if (uid !== sqlid) {

        res.send("invalid ID...");
        return;

    }

    const secret = JWT_SECRET + sqlpassword;
    console.log("user password", sqlpassword);
    try {

        const payload = jwt.verify(token, secret);
        console.log("payload", payload);

        //validate password should match
        //we can simply find the user with payload email and id and finally update with new password
        //always hash the password before saving

        password = resetpassword
        console.log("user password", sqlpassword)
        // res.send(user);

        const email = global.email;
        console.log(email);


        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                console.log(err);
            }

            db.query("update signup set password=? where email='" + email + "'",
                [hash],
                (err, result) => {
                    console.log(err);
                    if (result) {
                        // console.log("successfull")
                        res.send("successfull")

                    }
                });

        });





    } catch (error) {

        console.log("error", error.message);
        res.send(error.message);
    }


})





// Google Login.............................


app.post('/googlelogin', (req, res, next) => {

    const tokenId = req.body.tokenId;
    let user = {
        id: 'asdasddas'
    }


    client.verifyIdToken({ idToken: tokenId, audience: '919173866270-dvha1je95f1f383dmupagnmrcvjfmk7i.apps.googleusercontent.com' }).then(response => {
        const { email_verified, name, email } = response.payload;
        if (email_verified) {
            // User.findone({email}).exec((err,user)=>{
            //     if(err){
            //         return res.status(400).json({
            //             error:"soething went wrong...."
            //         })
            //     } 

            console.log(response.payload)


            db.query("SELECT * FROM signup WHERE email = ?;",
                email,
                (err, result) => {
                    // console.log(err);

                    if (result.length > 0) {

                        // const token = jwt.sign(payload, secret, { expiresIn: '15m' })

                        // res.send("email already exist")
                        // const token = jwt.sign({ id: user.id }, secret, { expiresIn: '7d' });
                        //     const { id, name, email } = user;
                        //     res.json({
                        //         token,
                        //         user: { id, name, email }
                        //     })

                                const id = result[0].id
                                const token = jwt.sign({ id }, "jwtSecret", {
                                    expiresIn: 300,
                                })
                                req.session.user = result;
        
        
                                // console.log(req.session.user=result);
                                res.json({ auth: true, token: token, result: result });
                                
                       

                    }

                    else {

                        const password="123"+"jwtSecret";

                        db.query("insert into signup(username,email,password) values('" + name + "','" + email + "','" + password + "')",
                        [name, email,password],
                        (err, result) => {
                            console.log(err);
                            if (result) {
                                // console.log("successfull")
                                res.send("successfull")

                            }
                        });
                      



                    }
                        //     }
                     
                     
                    });
                       // })

                    }

                
                })
            console.log(tokenId);
        })



        app.post('/facebooklogin',(req,res,next)=>{

            const {userID,accessToken}=req.body;

            let urlGraphFacebook='https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}'

            fetch(urlGraphFacebook,{
                // method='GET'
            })

            .then(res=>res.json())
            .then(res=>{

                const {email,name}=res;

                db.query("SELECT * FROM signup WHERE email = ?;",
                email,
                (err, result) => {
                    // console.log(err);

                    if (result.length > 0) {

                        // const token = jwt.sign(payload, secret, { expiresIn: '15m' })

                        // res.send("email already exist")
                        // const token = jwt.sign({ id: user.id }, secret, { expiresIn: '7d' });
                        //     const { id, name, email } = user;
                        //     res.json({
                        //         token,
                        //         user: { id, name, email }
                        //     })

                                const id = result[0].id
                                const token = jwt.sign({ id }, "jwtSecret", {
                                    expiresIn: 300,
                                })
                                req.session.user = result;
        
        
                                // console.log(req.session.user=result);
                                res.json({ auth: true, token: token, result: result });
                                
                       

                    }

                    else {

                        const password="123"+"jwtSecret";

                        db.query("insert into signup(username,email,password) values('" + name + "','" + email + "','" + password + "')",
                        [name, email,password],
                        (err, result) => {
                            console.log(err);
                            if (result) {
                                // console.log("successfull")
                                res.send("successfull")

                            }
                        });
                      



                    }
                        //     }
                     
                     
                    });




            })

        })




        //instamojo integration..........................................


        app.post('/instamojo',(req,res)=>{

            insta.setKeys('31b8943c139ceeda8bd161ddd994cae9','74164f66bc4f47706a62c79aadde32e3');

            const data=new insta .PaymentData();
            insta.isSandboxMode(true);
            



        })









