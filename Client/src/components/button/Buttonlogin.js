import React,{useState} from 'react'
import styled from 'styled-components';





const Button = styled.button`
height:25px;
width:100px;
background-color:${({btn}) => btn ? 'green' : 'red'};
top:15px;
position:relative;
border-radius:5px;
    
    
 
 
    

`;





function Buttonlogin() {

    const [btnlog,setBtnlog]=useState(false);
    
    
   
  

    return (
        <div>
         
            <Button btn={btnlog} onClick={() => setBtnlog(!btnlog)} >
                <button className="btnlogin"></button>
                
            </Button>
           

        </div>
    )
}

export default Buttonlogin
