import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './Liveclass.css'
import {Link,Redirect} from 'react-router-dom';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import App from '../../App';

function Liveclass() {

 
    return (

       
        <div className="Liveclass">
            <Navbar />
            <div className="session">

            <div>
                <h2>Welcome to the Class Session</h2>
                <h3>TIMING : Monday to Friday 2-:30 PM to 5.30 PM</h3>
            </div>

            <div>
                <h3>Find below the google meet link</h3>
                <Link to="/googlemeet">https://meet.google.com/zqw-ygbr-gzq</Link>


                
               


            
            </div>

            </div>
         

            <Footer />

        </div>
    )
}

export default Liveclass
