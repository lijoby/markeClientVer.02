const express=require('express');
const jwt=require('jsonwebtoken');
const cors =require("cors");

const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');


app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}));


app.get('/',(req,res) => {

    res.send('hello world');
})

app.get('/forgot-password',(req,res,next) =>{

})






app.post('/reset-password',(res,req,next) =>{
    
})


app.post('/reset-password/:id/:token',(res,req,next) =>{
        
        
    //   const {id,token} =req.params;
    //   const id=req.body.id;
    //   const token=req.body.token;
    // const {id,token}=req.params;
    const resetpassword=req.body.resetpassword;
    //   console.log(id);
      console.log(resetpassword);

        // const token=req.params.token

        // const Resetpassword=req.body.Resetpassword

          //check if this id exist in the database

//     if(id !== user.id)
//     {

//         res.send("invalid ID...");
//         return;
//     }

//     const secret=JWT_SECRET + user.Resetpassword;
//     try{

//         const payload=jwt.verify(token,secret);

//         //validate password should match
//         //we can simply find the user with payload email and id and finally update with new password
//         //always hash the password before saving

//         user.password=Resetpassword
//         res.send(user);

// }catch(error){

//         console.log(error.message);
//         res.send(error.message);
//     }
    
    })

// })




// app.get('/resetpassword',(res,req,next) =>{

//     // const {id,token} =req.params;
//     const resetpassword=req.body.resetpassword;
//     const id=req.body.id;
//     const token=req.body.toke


//     //check if this id exist in the database

//     if(id !== user.id)
//     {

//         res.send("invalid ID...");
//         return;
//     }

//     //we have valid id , and we have a valid user with this id

//     const secret=JWT_SECRET + user.password;
//     try{

//         const payload=jwt.verify(token,secret)
//         res.render("reset-password",{email:user.email})
//     } catch(error){

//         console.log(error.message);
//         res.send(error.message);
//     }



//     })


app.listen(3030,()=>console.log("running server"))

