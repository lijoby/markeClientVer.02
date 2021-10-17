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





function Signup() {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [contactno,setContactno]=useState('');
    const [profession,setProfession]=useState('');
    const [userid,setUserid]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('');

    const [msgconfirmpwd,setMsgconfirmpwd]=useState('');

    const [warnuserpwd,setWarnuserpwd]=useState('');

    const[Msg,setMsg]=useState('');


    const login = (e) =>{

        e.preventDefault();

        Axios.post("http://localhost/signup.php",{
    
        username:username,
        email:email,
        contactno:contactno,
        profession:profession,
        userid:userid,
        password:password,
        confirmpassword:confirmpassword
        }).then((response) => {
            if(response.data=="username or password") {
                //   alert("hahaha");
                setWarnuserpwd("username or password incorrect");
    
              }
        });
      };



      const confimpwd = (e)=>{
        setConfirmpassword(e.target.value)
        if(password!=confirmpassword)
        {
            setMsgconfirmpwd("check password");
            
        }
        else{
            setMsgconfirmpwd("");
        }
      }



    return (
        <>

<Navbar />

        <div className="signup">
           
            <div className="signup-left">
                {msgconfirmpwd}
                <form>
                <div className="inupttxtnotifycation">{Msg}</div>
                    <div className="input-text"><img src={imgusername}/><input onChange={(e)=> {setUsername(e.target.value);{setMsg("Enter your Name")};}} type="text" name="" placeholder="Username"/></div>
                <div className="inupttxtnotifycation">{Msg}</div>
                    <div className="input-text"><img src={imgemail}/><input onChange={(e)=> {setEmail(e.target.value);{setMsg("Enter your Emailaddress")};}} type="text" name="" placeholder="Email"/></div>
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
                    <div className="input-text"><img src={imgpassword}/><input onChange={(e)=> {setPassword(e.target.value)}} type="text" name="" placeholder="Password"/></div>
                    <div className="input-text"><img src={imgpassword}/><input onChange={confimpwd} type="text" name="" placeholder="Confirm Password"/></div>
                    <div className="erruserpwd">{warnuserpwd}</div> 
                     <div className="signup-normal"><button onClick={login}>SIGNUP</button> </div>


                     <div className="signup-facebook"><img src={imgfacebook}/><button>SIGNUP WITH FACEBOOK</button></div>  
                     <div className="signup-google"><img src={imggoogle}/><button>SIGNUP WITH GOOGLE</button> </div> 
                    {/* <Login /> */}

                </form>
            </div>
            <div className="signup-rightContainer">
            <div className="signup-right">
                <h1>Welcome...!!!</h1>
                <h2>Sign Up</h2>
                <h4>Here is the sign up page given fields to be filled for reistration</h4>

            </div>
            </div>
          
        </div>

        <Footer />
        </>
    )
}

export default Signup
