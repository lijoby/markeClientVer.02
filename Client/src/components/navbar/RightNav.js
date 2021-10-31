import React,{useState,useContext} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../button/Buttonlogin';
import {Usercontext} from '../../App';
import {useHistory} from 'react-router-dom';
import './Navbar.css'






const Ul = styled.ul`
    list-style:none;
    display:flex;
    flex-flow:row nowrap;
    right:0px;
    position:relative;
    font-size:14px;
    font-weight:bold;
    text-decoration: none;

Link{

    text-decoration:white;
  
}
    
li{
    padding:18px;
    color:black;
       
}


li:hover{
    color:#FFCC01;
}



@media(max-width:768px){
    
    flex-flow:column nowrap;
    background-color:grey;
    position:fixed;
    transform:${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top:100px;
    right:0;
    height:500px;
    width:400px;
    padding-top:3.5rem;
    transition:transform 0.3s ease-in-out;

    li{

        color:violet;
    }
    
}


@media(max-width:480px){
    
    flex-flow:column nowrap;
    background-color: #1da1f2;
    position:fixed;
    transform:${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top:100px;
    left:0px;
    height:400px;
    width:250px;
    transition:transform 0.3s ease-in-out;
    z-index:20;
    
    

    li{

        color:white;

    }
    
}
`;





function RightNav({open}) {

    const [btnstate,setBtnstate]=useState(false);

    const {state,dispatch} =useContext(Usercontext);
    let history = useHistory();

    function handleLogOut() {
        // sessionStorage.setItem("userToken", '');
        // sessionStorage.clear();
        dispatch({type:"USER",payload:false});
        history.push("/logout"); // whichever component you want it to route to
        localStorage.clear("token");
      }

    const RenderMenu =()=>{
            if(state){

                return(


            <Ul open={open}>

            {/* <Link to='/'><li>HOME</li></Link> */}
            <Link className="link" to="/session"><li>SESSION</li></Link>
            <Link className="link" to="/explorecourse"><li>EXPLORE COURSE</li></Link>
            <Link className="link" to="/logout" onClick={handleLogOut}><li>LOGOUT</li></Link>

            </Ul>

                )
            }

            else{

                return(

                    <Ul open={open}>

                    <Link className="link" to='/'><li>HOME</li></Link>
                    <Link className="link" to="/signup"><li>BUY A COURSE</li></Link>
                    <Link className="link" to="/explorecourse"><li>EXPLORE COURSE</li></Link>
                    <Link className="link" to="/signup"><li>REGISTER ACCOUNT</li></Link>
                    <Link className="link" to="/signin"><li>LOGIN</li></Link>
        
                    </Ul>
                    
                )
            }
    }

  

    return (
        <div>
             <Ul open={open}>

         

            <RenderMenu />

            </Ul>

        </div>
    )
}

export default RightNav
