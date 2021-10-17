import React,{useContext} from 'react'
import  GoogleLogin  from 'react-google-login';
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import {Usercontext} from '../../App';
import './Googlelogin.css';

function Googlelogin(props) {

    let history=useHistory();
    const {state,dispatch}= useContext(Usercontext);

    const responseSuccessGoogle=(response)=>{
        
        console.log(response);
        Axios({

            method:"post",
            url:"http://localhost:3030/googlelogin",
            data:{tokenId:response.tokenId}
            
    
        }).then(response=>{
            console.log(response);
            if(response.data){
                localStorage.setItem("token","Bearer" + response.data.token);
                dispatch({type:"USER",payload:true})
                history.push("/liveclass");
                console.log("login succesfull",response);
            }
            
        })

    }

    const responseErrorGoogle=(response)=>{

    }


    return (
        <div>
              <GoogleLogin
    clientId="919173866270-dvha1je95f1f383dmupagnmrcvjfmk7i.apps.googleusercontent.com"
    // buttonText="Login"
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
    // className="btnGoogle"
    >

<i className="fa fa-google-plus" style={{ marginLeft: 
            '5px' }}/> 
            <span>&nbsp;&nbsp;Sign In with Google</span>

            </GoogleLogin>

        </div>
    )
}

export default Googlelogin
