import React from 'react';
import './Footer.css'
import logo from '../../images/logo_.png';
import google from '../../images/googleplay.png';
import app from '../../images/app.png';

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-center">
            <div className="container-fluid ft-container">
                <div className="d-flex justify-content-between">
                    <div className="col-md-7">
                        <img src={logo} alt="" className='w-25' />
                        <p>Chaldal.com is an online shop available in Dhaka, Narayanganj, Chattogram and Jashore. We believe time is valuable to our fellow residents, and that they should not have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Chaldal delivers everything you need right at your door-step and at no additional cost.</p>
                    </div>
                    <div className="col-md-5 d-inline-block text-right">
                        <img src={google} alt="" className='app-icon-footer' />
                        <img src={app} alt="" className='app-icon-footer' />
                        <div className="d-flex mb-4 footer-form">
                            <input style={{position:'relative',top:"60px",left:'80px'}} type="text" placeholder="Enter Your Email" name="Email" className='form-control' />
                            <button className='form-btn' style={{position:'relative',top:'60px',right:'-20px'}}>Submit</button>
                        </div>

                    </div>

                </div>
                <div className="footer-des d-lg-flex">
                    <div className="col-md-3 justify-content-center ">
                        <h5>Important Links</h5>
                        <p>Contact Us</p>
                        <p>Join With Us</p>
                        <p>Contact Us</p>
                        <p>Join With Us</p>

                    </div>
                    <div className="col-md-3">
                        <h5>Our Products</h5>
                        <p>Contact Us</p>
                        <p>Join With Us</p>
                        <p>Contact Us</p>

                        <p>Join With Us</p>

                    </div>

                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <p>Contact Us</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>


                    </div>

                </div>
                <p className='text-center text-white copyright'>&#169; 2021 || ECO-SHOP Bangladesh</p>
            </div>
        </div>

    );
};

export default Footer;