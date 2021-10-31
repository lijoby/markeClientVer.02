import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home-top">
                <h3>Live Online Classes</h3>
                <div className="line-yello"></div>
                <h4>ONE MONTH COURSE WITH CERTIFICATION</h4>
                <h4>EXPERT SESSION ALL 4 DAYS IN A WEEK</h4>
            </div>

            <div className="btn">

                <Link to="signup">
                    <button className="btn-reg">REGISTER FOR CLASSESS</button>
                </Link>
 
            </div>

            <div className="list">
                <ul>
                    <li>1 hour session each day</li>
                    <li>Evaluation on the topics covered</li>
                    <li>We make to you an individual player</li>
                    <li>Globally accepted certifications</li>
                </ul>
            </div>
        </div>
    )
}

export default Home
