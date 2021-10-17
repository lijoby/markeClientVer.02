
import React from 'react'
import './Page03.css'

import imgflow from './images/path.png'
// import imgwonderman from'./images/wonderman.png'
import {useHistory} from 'react-router-dom'; 

function Page03() {

    let history = useHistory();
    return (

        <div className="page03container">

        
        <div className="page03">

            <div className="top">

            <div className="topLeft">

            <h1>THAT YOU'LL LEARN WITH US...</h1>
            <img className="imgflow" src={imgflow} alt="" srcset="" />

            </div>


            <div className="topRight">
                
                

            

                <div className="page03RightList">

                <div className="page03RightListLeft">

                    <div className="list">
                    <h4>Module-01</h4>
                    <p>Basics of Digital Marketing and Emerging Technologies</p>
                    </div>
                    <div className="list">
                    <h4>Module-02</h4>
                    <p>Social Media platform Management & Techniques</p>
                    </div>
                    <div className="list">
                    <h4>Module-03</h4>
                    <p>Google for Business<br />(Analytics, SEO, AdWords, Paid Campaigns, Youtube Ads)</p>
                    </div>
                    
                    <div className="list">
                    <h4>Module-04</h4>
                    <p>Blogging, email and website</p>
                    </div>
                    <div className="list">
                    <h4>Module-05</h4>
                    <p>Ecommerce Sales and Marketing (Affiliate marketing & Co-branding online & Offline integration for sale and Marketing)</p>
                    </div>

                    <button onClick={()=>history.push("/page03registerclass")}>REGISTER FOR CLASS</button>
                    

                </div>     
        
                </div>

             
                    
                


                 
             

                {/* <img className="imgtopRightwonderman"  src={imgwonderman} alt="" srcset="" /> */}
            </div>

            <div className="toprightmostpara">

                <div className="list">
                    <h4>LIVE CLASSES</h4>
                    <p>1 hour session each day</p>
                </div>
                <div className="list">
                    <h4>EVALUATION</h4>
                    <p>Evaluation on the topics covered</p>
                </div>
                <div className="list">
                    <h4>CAREER MOTIVE</h4>
                    <p>We make to you be an individual player</p>
                </div>
                <div className="list">
                    <h4>CERTIFICATION</h4>
                    <p>Globally accepted certifications</p>
                </div>
    
               

            </div>
          
            </div>

            <div className="whiteline"></div>

            <div className="bottom">
                
                <div className="bottomBox">
                    <ul>
                        <li>17 HOURS SESSION</li>
                        <li>|</li>
                        <li>LIVE SESSION VIA GOOGLE MEET</li>
                        <li>|</li>
                        <li>COURSE CERTIFICATE</li>
                    </ul>
                </div>
            </div>
            
            
        </div>

        </div>
    )
}

export default Page03
