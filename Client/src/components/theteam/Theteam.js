import React from 'react'
import './Theteam.css'
import imgperson01 from './images/partner01.png'
import imgperson02 from './images/partner02.png'
import imgfacebook from './images/facebook.png'
import imginstagram from './images/instagram.png'
import imgyoutube from './images/youtube.png'
import imgtheteampage from './images/imgtheteampage.png'





function Theteam() {
    return (




        <div className="theteam-container">
            <h1>THE EXPERTS</h1>

            <div className="theteam">
                <div className="teammessage">
                <p>We at Marketution Coach and Produce millions of Online Marketing Professionals. We assist Business owners to handle day to day Digital Marketing and Digital Sales Affairs

                </p>

                <p>Our Experts are the masters in creating an Online business culture which enables the updated techniques to be delivered to the commons</p>
                <img className="imgleft" src={imgtheteampage} alt="" />
                
                
                </div>
                <div className="person01">
                    <div className="person01Top">
                        <img className="imgperon" src={imgperson01} alt="" />
                        <div className="socialMedia">
                            <ul>
                                <li><img src={imgfacebook} alt="" /></li>
                                <li><img src={imginstagram} alt="" /></li>
                                <li><img src={imgyoutube} alt="" /></li>

                            </ul>

                        </div>
                    </div>

                    <div className="personBottom">
                        <h3>T K Noushad</h3>
                        <h5>Expert in ecommerce Marketing <br />
                            Sales/Business</h5>
                        <ul>
                            <li>Mastermind in business
                                administration</li>
                            <li>Competent in people
                                management</li>
                            <li>Expert in ecommerceMarketing</li>
                            <li>Sales/Businessdevelopment
                                strategy</li>
                            <li>Phenomenon in Marketing
                                strategy</li>
                            <li>Vigorous in Investment
                                Facilitation</li>
                            <li>Versatile in effective
                                leadership</li>
                        </ul>
                    </div>


                </div>


                <div className="person01">
                    <div className="person01Top">
                        <img className="imgperon" src={imgperson02} alt="" />
                        <div className="socialMedia">
                            <ul>
                                <li><img src={imgfacebook} alt="" /></li>
                                <li><img src={imginstagram} alt="" /></li>
                                <li><img src={imgyoutube} alt="" /></li>

                            </ul>

                        </div>
                    </div>

                    <div className="personBottom">
                        <h3>K S Sunil Krishna</h3>
                        <h5>Certified Digital Marketing<br />
                            Expert
                        </h5>
                        <ul>
                            <li>MBA in Marketing &
                                International Business</li>

                            <li>Expertise in Creative
                                direction & brand building</li>
                            <li>Implementation of online
                                strategy via advertising</li>
                            techniques
                            <li>Online Business
                                development techniques</li>
                            <li>Innovative ideation process
                                implementation</li>

                        </ul>
                    </div>


                </div>

            </div>

        </div>


    )
}

export default Theteam
