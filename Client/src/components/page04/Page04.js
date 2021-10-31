import React from 'react'
import './Page04.css'
import imgstudent from './images/student.png';
import imgintern from './images/intern.png';
import imgemployee from './images/employee.png';
import imgentrepreneur from './images/ENTREPRENEUR.png';
import imgwhocanjoin from './images/whocanjoin.png';

function Page04() {
    return (
        <div className="page04Container">
            <div className="page04">

            <h2>WHO ALL CAN JOIN...</h2>
                <div className="page04joinlist">

                    

                    <div className="profession">

                        <div className="professionRow"><img src={imgstudent} alt=""/><h3>STUDENTS</h3></div>
                        <div className="professionRow"><img src={imgintern} alt=""/><h3>INTERN</h3></div>
                        <div className="professionRow"><img src={imgemployee} alt=""/><h3>EMPLOYEE</h3></div>
                        <div className="professionRow"><img src={imgentrepreneur} alt=""/><h3>ENTREPRENEUR</h3></div>

                    </div>


                  
                </div>

                <div className="page04para">
                    <p>Understanding the right digital marketing channels
                        Discovering the digital marketing fundamentals & tools
                        Structured course format for understanding
                        Curriculum based on updated digital trends
                        Discovering 5 updated modules that help you understand
                        and determine the digital marketing strategy
                        Creating a career path in digital marketing
                        Learn the tactics and strategy of different online channels
                        Demonstrating of backend activities of creating Ad
                        campaigns in Google & Social Media
                        Design & developing effective Ad campaigns in online
                        platforms
                        Understanding the updated digital marketing trends &
                        tools
                        Live understanding of Ad creating
                        Course conduction by experienced Tutors</p>

                       

                </div>


                <div className="fee">
                        <h4>FEES</h4>
                        <h4>Rs.2400.00 PLUS TAX</h4>
                </div>

            </div>

            <div className="rightBottom"><img src={imgwhocanjoin} alt="" /></div>
        </div>

    )
}

export default Page04
