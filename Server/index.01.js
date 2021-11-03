const express= require("express");
const mysql=require("mysql");
const cors =require("cors");



const app=express();

app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"register"
});


// insert into database


app.post("/register",(req,res) => {


    const username=req.body.username
    const email=req.body.email
    const contactno=req.body.contactno
    const profession=req.body.profession
    const userid=req.body.userid
    const password=req.body.password
    const confirmpassword=req.body.confirmpassword



    db.query(`insert into signup(username,email,contactno,profession,userid,password,confirmpassword) values (?,?,?,?,?,?,?)) `,
    [username,email,contactno,profession,userid,password,confirmpassword],
    (err,result) => {
        console.log(err);
    });
    
});



//Sign into database


app.post("/signin",(req,res) => {


    // const username=req.body.username
    // const email=req.body.email
    // const contactno=req.body.contactno
    // const profession=req.body.profession
    const userid=req.body.userid
    const password=req.body.password
    // const confirmpassword=req.body.confirmpassword



    db.query(`select * from signup where userid=? and password=? `,
    [userid,password],
    (err,result) => {

        if(err){
            res.send({err:err});
            
        }

        if(result.length > 0)
        {
            res.send(result);
          
        }
        else{
            res.send({message:"wrong username password combination"});
           
        }
        
    });
});





app.listen(3030,() =>{

    console.log("running server");
});

