import React from 'react'
import  './Footer.css';
import imgFacebook from './images/facebook.png';
import imgInstagram from './images/instagram.png';
import imgYoutube from './images/youtube.png';
import imgLocation from './images/placeholder.png';


function Footer() {
    return (
        <div className="footer">

            <div className="footerColumnOne">

            

            <div className="marketution">
                <h2>Marketution</h2>
                <div className="para01">
                <h4>Established 2021</h4>
                <h4>Thiruvananthapuram</h4>
                </div>

                <div className="para02">
                    <h4>Copyright 2021 All Rights Reserved</h4>
                    <h4>Marketution</h4>
                </div>

            </div>
        <div className="Office">
            <h2>Office</h2>
            <h3>Bangalore / Trivandrum / Dubai/ UK</h3>
            <div className="viewmap">
                <img src={imgLocation} alt="" />
                <h4>VIEW ON MAP</h4>
            </div>
        </div>


        <div className="Connect">
            <h2>Connect</h2>
            <div className="ConnectFacebook">
                <img src={imgFacebook } alt="" />
                <h4>Facebook</h4>
            </div>

            <div className="ConnectInstagram">
                <img src={imgInstagram} alt="" />
                <h4>Instagram</h4>
            </div>

            <div className="ConnectYoutube">
                <img src={imgYoutube} alt="" />
                <h4>Youtube</h4>
            </div>


        </div>


        <div className="Contact">
            <h2>Contact</h2>

            <h4>Marketution</h4>
            <h4>Trivandrum</h4>
            <h4>+91 7356222464</h4>

        </div>

        </div>

        <div className="footerColumnTwo">

        <div className="footer-bottom">
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Copyright</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
            </ul>

        </div>
            
        </div>

      


        </div>
    )
}

export default Footer
