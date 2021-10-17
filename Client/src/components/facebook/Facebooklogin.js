import React from 'react'
import FacebookLogin from 'react-facebook-login'
import Axios from 'axios';
import './Facebooklogin.css'


const responseFacebook=(response)=>{
    console.log("login result",response);

    Axios({

        method:"post",
        url:"http://localhost:3030/facebooklogin",
        data:{accessToken:response.accessToken,userID:response.userID}
        

    }).then(response=>{
        console.log(response);
        if(response.data){
            // localStorage.setItem("token","Bearer" + response.data.token);
            // dispatch({type:"USER",payload:true})
            // history.push("/liveclass");
            console.log("facebook login succesfull",response);
        }
        
    })
}


function Facebooklogin() {


  
    return (
        <div> 
                <FacebookLogin
    appId="252723210057708"
    autoLoad={false}
    fields="name,email,picture"
    cssClass="btnFacebook"
    callback={responseFacebook} 
    //    icon={<i className="fa fa-facebook" style{{marginLeft:'5px'}}>
    //     </i>}
        textButton = "&nbsp;&nbsp;Sign In with Facebook"   
        
            />

            </div>

    )
}




   

export default Facebooklogin
