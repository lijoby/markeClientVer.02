
import React, { useState } from 'react'
import Axios from 'axios';

import './Signup.css'
import imgusername from './images/icon/user.png'
import imgemail from './images/icon/email.png'
import imgcontacts from './images/icon/contacts.png'
import imgprofession from './images/icon/profession.png'
import imgpassword from './images/icon/password.png'
import imgfacebook from './images/icon/facebook.png'
import imggoogle from './images/icon/google.png'

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useHistory } from 'react-router-dom';


import { userSchema } from './UserValidation.js'
import * as Yup from "yup";
import { Formik, Form, Field } from 'formik';
// import { TextField } from './TextField';

import Paymentgateway from '../instamojogateway/Paymentgateway.js';




const Signup = () => {

    let history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [contactno, setContactno] = useState('');
    const [profession, setProfession] = useState('');
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');



    const [message, setMessgage] = useState('')




    const validate = Yup.object({
        userName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        eMail: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        contactNo: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required('A phone number is required'),

        userID: Yup.string()
            .max(7, 'Must be 15 characters or less')
            .required('Required'),
        passWord: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('passWord'), null], 'Password must match')
            .required('Confirm password is required'),
    })


    const signup = async (e) => {

        e.preventDefault();



        // const isValid= await userSchema.isValid(signupData);
        // console.log(isValid);


        Axios.post("http://localhost:3030/register", {

            username: username,
            email: email,
            contactno: contactno,
            profession: profession,
            userid: userid,
            password: password,
            confirmpassword: confirmpassword


        }).then((response) => {


            console.log(response);
            console.log(response.data)
            if (response.data) {
                setMessgage("You have succefully registered");
                history.push('/externalpayment');


            }


        });




    };


    return (

        <>
        <Navbar />
            <div className="signup">
                <div className="signup-left">
                    <Formik
                        initialValues={{
                            userName: '',
                            eMail: '',
                            contactNo: '',
                            userID: '',
                            passWord: '',
                            confirmPassword: ''
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            console.log(values)
                        }}
                    >
                        {({ errors, touched }) => (





                            // {formik => (

                            <Form>

                               


                                <div className="input-text"><img src={imgusername} /><Field className="Field" name="userName" type="text" placeholder="Username" onKeyUp={(e) => { setUsername(e.target.value) }} /></div>
                                {/* <TextField label="First Name" name="userName" type="text" onKeyUp={(e)=> {setUsername(e.target.value)}} /> */}

                               

                                {errors.userName && touched.userName ? (
                                    <div className="input-error">
                                        {errors.userName}

                                    </div>

                                ) : null}

                                

            


                                <div className="input-text"><img src={imgemail} /><Field className="Field" name="eMail" type="text" placeholder="Email" onKeyUp={(e) => { setEmail(e.target.value)}} /></div>
                                {errors.eMail && touched.eMail ? (
                                    <div className="input-error">
                                        {errors.eMail}

                                    </div>

                                ) : null}

                                <div className="input-text"><img src={imgcontacts} /><Field className="Field" name="contactNo" type="text" placeholder="Contact No" onKeyUp={(e) => { setContactno(e.target.value) }} /></div>
                                {errors.contactNo && touched.contactNo ? (
                                    <div className="input-error">
                                        {errors.contactNo}

                                    </div>

                                ) : null}

                                <div className="input-text"><img src={imgprofession} />
                                    <select onChange={(e) => { setProfession(e.target.value) }}>
                                        <option value="N/A">Profession</option>
                                        <option value="students">STUDENTS</option>
                                        <option value="intern">INTERN</option>
                                        <option value="employee">EMPLOYEE</option>.

                                        <option value="enterprenure">ENTERPRENURE</option>
                                    </select>

                                </div>



                                <div className="input-text"><img src={imgusername} /><Field className="Field" type="text" name="userID" placeholder="UserID" onKeyUp={(e) => { setUserid(e.target.value) }} /></div>
                                {errors.userID && touched.userID ? (
                                    <div className="input-error">
                                        {errors.userID}

                                    </div>

                                ) : null}
                                <div className="input-text"><img src={imgpassword} /><Field className="Field" type="password" name="passWord" placeholder="Password" onKeyUp={(e) => { setPassword(e.target.value) }} /></div>
                                {errors.passWord && touched.passWord ? (
                                    <div className="input-error">
                                        {errors.passWord}

                                    </div>

                                ) : null}
                                <div className="input-text"><img src={imgpassword} /><Field className="Field" type="password" name="confirmPassword" placeholder="Confirm Password" onKeyUp={confirmpassword}  /></div>
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div className="input-error">
                                        {errors.confirmPassword}

                                    </div>

                                ) : null}

                                <div className="erruserpwd">{ }</div>
                                <div className="signup-normal"><button onClick={signup}>SIGNUP</button> </div>


                                {/* <div className="signup-facebook"><img src={imgfacebook} /><button>SIGNUP WITH FACEBOOK</button></div>
                                <div className="signup-google"><img src={imggoogle} /><button>SIGNUP WITH GOOGLE</button> </div> */}

                            </Form>

                        )}

                        {/* )} */}



                    </Formik>

                </div>





                <div className="signup-rightContainer">
                    <div className="signup-right">
                        <h1>Welcome...!!!</h1>
                        <h2>Sign Up</h2>
                        <h4>Here is the sign up page given fields to be filled for reistration</h4>
                        <h3>{message}</h3>

                    </div>
                </div>






            </div>
            <Footer />

        </>
    )
}

export default Signup;