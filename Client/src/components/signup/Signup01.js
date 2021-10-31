import React,{useState} from 'react'
import Axios from 'axios';

import './Signup.css'
import imgusername from './images/icon/user.png'
import imgemail from './images/icon/email.png'
import imgcontacts from './images/icon/contacts.png'
import imgprofession from './images/icon/profession.png'
import imgpassword from './images/icon/password.png'
import imgfacebook from './images/icon/facebook.png'
import imggoogle from './images/icon/google.png'

import Login from './google/Googlesigin';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import {useHistory} from 'react-router-dom';


import {userSchema} from './UserValidation.js'
import * as Yup from "yup";
import { Formik, Form } from 'formik';
import { TextField } from './TextField';






function Signup() {
    let history=useHistory();
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [contactno,setContactno]=useState('');
    const [profession,setProfession]=useState('');
    const [userid,setUserid]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('');

    const [msgconfirmpwd,setMsgconfirmpwd]=useState('');

    const [warnuserpwd,setWarnuserpwd]=useState('');

    const[Msgusername,setMsgusername]=useState('');
    const[msgemail,setMsgemail]=useState('');
    



    const[message,setMessgage] =useState('')


    const signupValidate=Yup.object().shape({
        username:Yup.string()
        .max(15, 'Must be 15 characters or less') 
        .required('Required'),
        email:Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        contactno:Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        profession:Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        userid:Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        password:Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
        confirmpassword:Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    })


    const signup = async (e) =>{

        e.preventDefault();

        

        // const isValid= await userSchema.isValid(signupData);
        // console.log(isValid);

         
        Axios.post("http://localhost:3030/register",{

            username:username,
            email:email,
            contactno:contactno,
            profession:profession,
            userid:userid,
            password:password,
            confirmpassword:confirmpassword

       
            }).then((response) => {


              console.log(response);
              console.log(response.data)
              if(response.data)
              {
                setMessgage("You have succefully registered");
                // history.push('/externalpayment');
                

                

              }


            });

       

       
      };



      const confimpwd = (e)=>{
        setConfirmpassword(e.target.value)
        if(confirmpassword===password)
        {
            setMsgconfirmpwd("check password");
            
        }
        else{
            setMsgconfirmpwd("");
            setConfirmpassword(e.target.value);
        }
      }



    return (


    //     <Formik
    //     initialValues={{
    //         username: '',
    //         email: '',
    //         contactno: '',
    //         profession: '',
    //         userid: '',
    //         password:'',
    //         confirmpassword:''


    //     }}
    //     validationSchema={signupValidate}
    //     onSubmit={values => {
    //       console.log(values)
    //     }}
    //   >
        <>

<Navbar />

        <div className="signup">
           {/* {({errors,touched})=>( */}

           
            <div className="signup-left">
                {msgconfirmpwd}
                <form>
               <div className="inupttxtnotifycation">{Msgusername}</div> 
                  <div className="input-text"><img src={imgusername}/><input name="username" onChange={(e)=> {setUsername(e.target.value);{setMsgusername("Enter your Name")};}} type="text" name="" placeholder="Username"/></div> 
                {/* {errors.username && touched.username ? (
                    <div>
                    {errors.username}

                    </div>

                ):null} */}
                


                <div className="inupttxtnotifycation">{msgemail}</div>
                    <div className="input-text"><img src={imgemail}/><input onChange={(e)=> {setEmail(e.target.value);{setMsgemail("Enter your Emailaddress")};}} type="text" name="" placeholder="Email"/></div>
                <div className="inupttxtnotifycation">{msgemail}</div>
                    <div className="input-text"><img src={imgcontacts}/><input onChange={(e)=> {setContactno(e.target.value)}} type="text" name="" placeholder="Contact No"/></div>
                    <div className="input-text"><img src={imgprofession}/>
                    <select onChange={(e)=> {setProfession(e.target.value)}}>
                            <option value="N/A">Profession</option>
                            <option value="students">STUDENTS</option>
                            <option value="intern">INTERN</option>
                            <option value="employee">EMPLOYEE</option>.

                            <option value="enterprenure">ENTERPRENURE</option>
                    </select>
                    
                    </div>


                    <div className="input-text"><img src={imgusername}/><input onChange={(e)=> {setUserid(e.target.value)}} type="text" name="" placeholder="UserID"/></div>
                    <div className="input-text"><img src={imgpassword}/><input onChange={(e)=> {setPassword(e.target.value)}} type="password" name="" placeholder="Password"/></div>
                    <div className="input-text"><img src={imgpassword}/><input onChange={confimpwd} type="password" name="" placeholder="Confirm Password"/></div>
                    <div className="erruserpwd">{msgconfirmpwd}</div> 
                     <div className="signup-normal"><button onClick={signup}>SIGNUP</button> </div>


                     <div className="signup-facebook"><img src={imgfacebook}/><button>SIGNUP WITH FACEBOOK</button></div>  
                     <div className="signup-google"><img src={imggoogle}/><button>SIGNUP WITH GOOGLE</button> </div> 
                    {/* <Login /> */}

                </form>
            </div>

                {/* )} */}
            <div className="signup-rightContainer">
            <div className="signup-right">
                <h1>Welcome...!!!</h1>
                <h2>Sign Up</h2>
                <h4>Here is the sign up page given fields to be filled for reistration</h4>
                <h3>{message}</h3>

            </div>
            </div>
          
        </div>

        <Footer />
        </>

        // </Formik>
    )
}

export default Signup
