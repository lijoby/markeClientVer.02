import React,{createContext, useState,useReducer} from 'react';
import './App.css';

import Homepage from './Homepage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Signup from './components/signup/Signup';
// import Nextpage from './components/signpage/Nextpage';
import Liveclass from './components/liveclass/Liveclass';

import Signin from './components/signpage/Signin';
import Navbar from './components/navbar/Navbar';
import Extsignin from './components/extsigninpage/Extsignin';
import Explorecourse from './components/explorecourse/Explorecourse';
// import Signin from './components/signpage/Signin';
// import Home1 from './components/signpage/Home1';

import { initialState,reducer }  from './components/reducer/Usereducer';
// import Signout from './components/signout/Signout';

import ProtectedRoute from './ProtectedRoute';
import Protect from './Protect';
import Resetpassword from './components/resetpassword/Resetpassword';
import Resetpasswordstep02 from './components/resetpasswordstep02/Resetpasswordstep02';


export const Usercontext = createContext();

function App() {


  const [status,setStatus]=useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);

  const [isAuth,setIsAuth]=useState(false);

  
  return (

 

    
    <Router>

      <div className="App">

     

        <Usercontext.Provider value={{state,dispatch}}>

        

        {/* <Switch> */}
          <Route  path="/" exact component={Homepage} />
          <Route exact path="/Home1" exact component={Signup} />
          <Route exact path="/signup" exact component={Signup} />
          {/* <Route path="/Liveclass" component={()=><Liveclass authorized={status}/>} /> */}
          
          <Route exact path='/googlemeet' component={() => { 
                window.open('https://meet.google.com/zqw-ygbr-gzq', "_blank") 
                 window.location.href = 'https://meet.google.com/zqw-ygbr-gzq';
                 
                 return null;
                    }}/>

          <Route path="/signin" exact component={Extsignin} />



          {/* <Route path="/session" component={Liveclass} /> */}
          <Route exact path="/explorecourse" component={Explorecourse} />
          <Route path="/Home" component={Homepage} />

          <Route exact path="/logout" component={Homepage} />

          <Route path="/page03registerclass" component={Signup} />
          <Route path="/forgotpassword" component={Resetpassword} />
          <Route path="/reset-password/:id/:token" component={Resetpasswordstep02} />
          <Route path="/externalpayment" component={() => { window.location = 'https://www.instamojo.com/@connectanbieter/ld83fbe7a60164548b1da85efbf885386/'; return null;} } />



        {/* </Switch> */}
        
        
     
       <Protect exact path="/liveclass" component={Liveclass} />
       <Protect exact path="/session" component={Liveclass} />

  

        </Usercontext.Provider>

       
        
   

      </div>

      </Router>




    
    
 
  );
}

export default App;
