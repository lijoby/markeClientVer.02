import React,{useState} from 'react'
import Axios from 'axios';
import {useParams} from 'react-router-dom';


function Resetpasswordstep02() {


    const [resetpassword,setResetpassword] = useState('');
    // const [Confirmpassword,setConfirmresetpassword]=useState('');

    console.log(resetpassword);

    const {id,token} =useParams();
    console.log(id)
    console.log(token)
   


    const submit=(e)=>{

        e.preventDefault();
        

        Axios.post("http://localhost:3030/resetpassword",{
        

            resetpassword:resetpassword,
            id:id,
            token:token
           

            
            

    }).then((response) =>{
        

        console.log(response);
        if(response.data)
        {
            console.log(response.data);
            
            
        }

    });

};



    return (
        <div className="resetpassword">
              <form>
                <label htmlFor="">Enter new password</label>
                <input type="text" onChange={(e)=> {setResetpassword(e.target.value)}} /> 
                {/* <label htmlFor="">Confirm new password</label>
                <input type="text" onChange={(e)=> {setConfirmresetpassword(e.target.value)}} /> */}
        

                <button onClick={submit}>SUBMIT</button>


            </form>
        </div>
    )
}

export default Resetpasswordstep02
