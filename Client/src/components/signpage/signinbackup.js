import React,{useState,useContext} from 'react';
import './Signin.css';
import imgUsername from'./images/user.png';
import imgPassword from'./images/password.png';

import imgfacebook from './images/facebook.png'
import imggoogle from './images/google.png'


import {Link} from 'react-router-dom';
import Axios from 'axios';





// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


// import Signup from '../signup/Signup';

import {useHistory} from 'react-router-dom';

import {Usercontext} from '../../App';









function Signin(props) {

const {state,dispatch}= useContext(Usercontext);

let history=useHistory();

const [userid,setuserid] =useState('');
const [password,setPassword] =useState('');


const[loginstatus,setLoginstatus]=useState('');

const[warnmsgusernamepwd,setWarnmsgusernamepwd] =useState('');



const signin=(e)=>{

    

    e.preventDefault();

Axios.post("http://localhost/signin.php",{
    userid:userid,
    password:password,
}).then((response) =>{

    
    if(response.data=="success"){
        dispatch({type:"USER",payload:true})
        history.push("/Liveclass");
        // setLoginstatus(response.data.message);
        
      }

      else{

        // setLoginstatus(response.data[0].username);
        setWarnmsgusernamepwd("Please check the username or password")
        
    
    
      }

});
       
};


    return (
        <div className="signin">
            <div className="signinLeft">
                <div className="textbox"><img src={imgUsername} alt="as" /><input type="text" placeholder="User Name" onChange={(e)=> {setuserid(e.target.value)}} /></div> 
                <div className="textbox"><img src={imgPassword } alt="AS" /><input onChange={(e)=> {setPassword(e.target.value)}} type="password" placeholder="Password" /></div>

                <div className="checkboxandbutton">
                <label htmlFor="lbl01">Remember Me</label>
                <input type="checkbox" name="lbl01" />

                {warnmsgusernamepwd}

                
               <button onClick ={signin}>LOGIN</button>
                
                
                </div>

               

                <div className="register">


        


                    <Link to="/signup">Register Now</Link>
                          
                    
                    
                    <p>Forgot Password</p>

                </div>

               <div className="socialmedia">

               <div className="signup-facebook"><img src={imgfacebook}/><button>SIGNUP WITH FACEBOOK</button></div>  
                <div className="signup-google"><img src={imggoogle}/><button>SIGNUP WITH GOOGLE</button> </div> 
                
               </div>

            </div>

            <div className="signinRightContainer">

            <div className="signinRight">
                <h1>Welcome Back...!</h1>

                <p>To keep connected with us please  <br/>
                    login with your personal info </p>
            </div>

            {loginstatus}

            </div>

            

            

            
        </div>
    )
}

export default Signin
