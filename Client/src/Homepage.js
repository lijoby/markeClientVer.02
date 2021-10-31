import React from 'react'
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Page02 from './components/page02/Page02';
import Page03 from './components/page03/Page03';
import Page04 from './components/page04/Page04';
// import Page06 from './components/page06/Page06';
import Scrolltop from './components/scrolltop/Scrolltop';
import Signin from './components/signpage/Signin';
import Theteam from './components/theteam/Theteam';
import Paymentgateway from './components/instamojogateway/Paymentgateway';

function Homepage() {
    return (
        <div className="Homepage">
            
    <Navbar />
    <Home />
    <Page02 />
    <Page03 />
    <Page04 />
    <Signin />
    <Theteam />
    <Footer />
    <Scrolltop />
    {/* <Paymentgateway /> */}

        </div>
    )
}

export default Homepage
