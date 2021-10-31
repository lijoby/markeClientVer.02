import React,{useState,useContext, Component} from 'react';
import './Signin.css';
import imgUsername from'./images/user.png';
import imgPassword from'./images/password.png';

import imgfacebook from './images/facebook.png'
import imggoogle from './images/google.png'
import imgsigninpage from './images/imgsigninpage.png'


import {Link} from 'react-router-dom';
import Axios from 'axios';

import facebooklogin from 'react-facebook-login'


// import ProtectedRoute from '../../ProtectedRoute';





// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


// import Signup from '../signup/Signup';

import {useHistory} from 'react-router-dom';

import {Usercontext} from '../../App';
import Facebooklogin from '../facebook/Facebooklogin';
import Googlelogin from '../googlelogin/Googlelogin';









function Signin(props) {

const {state,dispatch}= useContext(Usercontext);

let history=useHistory();

const [userid,setuserid] =useState('');
const [password,setPassword] =useState('');


const[loginstatus,setLoginstatus]=useState('');

const[warnmsgusernamepwd,setWarnmsgusernamepwd] =useState('');



Axios.defaults.withCredentials=true;
  
// const authentication=()=>{props.auth(true)};


const signin = () =>{

  

  Axios.post("http://localhost:3030/login",{

    userid:userid,
  password:password,
  }).then((response) => {

  
  if(response.data.auth){
    setLoginstatus(false);
   localStorage.setItem("token","Bearer" + response.data.token);
 
  //  props.changeWord(true);
   dispatch({type:"USER",payload:true})
   history.push("/liveclass");
  //  setAuthorized(true);

    }

    else
    
    {
      // console.log(response.data);
      // localStorage.setItem("token","Bearer" + response.data.token);
      
      setLoginstatus(true);
    }
    
  });
};


// useEffect(() => {
//   Axios.get("http://localhost:3030/login").then((response) =>{
//     if(response.data.loggedIn===true){
//       setLoginstatus(response.data.user[0].username)
      
//     }
    
//   });
//   // console.log(response);
// },[]);


const userAuthenticated=()=>{
Axios.get("http://localhost:3030/isUserAuth",{

headers:{

"x-access-token":localStorage.getItem("token"),

},
}).then((response)=>{
console.log(response);
})



}


    return (
        <div className="signin">
            <div className="signinLeft">
              <div className="signinLeft-border">
                
              
                <div className="textbox"><img src={imgUsername} alt="as" /><input type="text" placeholder="User Name" onChange={(e)=> {setuserid(e.target.value)}} /></div> 
                <div className="textbox"><img src={imgPassword } alt="AS" /><input onChange={(e)=> {setPassword(e.target.value)}} type="password" placeholder="Password" /></div>

                <div className="checkboxandbutton">
                {/* <label htmlFor="lbl01">Remember Me</label> */}
                {/* <input type="checkbox" name="lbl01" /> */}

                {warnmsgusernamepwd}

                
               <button onClick ={signin}>LOGIN</button>
                
                
                </div>

               

                <div className="register">


        


                    <Link to="/signup"><p>Register Now</p></Link>
                          
                    
                    <Link to="/forgotpassword"><p>Forgot Password</p></Link>
                    

                </div>

               <div className="socialmedia">

                 
                  <Facebooklogin className="signup-facebook"/>

               {/* <div className="signup-facebook"><img src={imgfacebook}/><button>SIGNUP WITH FACEBOOK</button></div>   */}
                {/* <div className="signup-google"><Googlelogin className="Googlelogin" /></div>  */}
                {/* <div className="signup-google"><img src={imggoogle}/><button>SIGNUP WITH GOOGLE</button> </div>  */}
                <Googlelogin className="signup-google" /> 
               </div>
               </div>

            </div>      

            <div className="signinRightContainer">

            <div className="signinRight">
                <h1>Welcome Back...!</h1>

                <p>To keep connected with us please  <br/>
                    login with your personal info </p>
                    <img src={imgsigninpage} alt="" />
            </div>

            {loginstatus}

            </div>

            

            

            
        </div>
    )
}

export default Signin
