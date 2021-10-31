import React,{useState} from 'react';
import  './Resetpassword.css';
import Axios from 'axios';
// import {useHistory} from 'react-router-dom';

function Resetpassword() {


    // let history=useHistory();

    const [forgotpassemail,setForgotpassemail] = useState('');


    const submit=(e)=>{

        e.preventDefault();
        

        Axios.post("http://localhost:3030/forgot-password",{

            forgotpassemail:forgotpassemail

    }).then((response) =>{

        console.log(response);
        if(response.data)
        {
            console.log(response.data);
            // history.push("/resetpassword");
        }

    });

};



    return (
        <div className="resetpassword">

            <form>
                <label htmlFor="">Enter email address</label>
                {/* <input onChange={(e)=>{setForgotpassemail(e.target.value)}} type="text" /> */}
                <input type="text" onChange={(e)=> {setForgotpassemail(e.target.value)}} />
        

                <button onClick={submit}>SUBMIT</button>


            </form>
            
        </div>
    )
}

export default Resetpassword
