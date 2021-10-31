import React from 'react'
import {Redirect} from 'react-router-dom';


function Nextpage({authorized}) {

        if(!authorized){
            return <Redirect to ="/signin" />;
        }

        return <div> if you are , you are allowed to be here </div>;

 
}

export default Nextpage
