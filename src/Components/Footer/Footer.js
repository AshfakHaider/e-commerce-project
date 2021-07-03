import React from 'react';
import './Footer.css'
import logo from '../../images/logo_.png';
import google from '../../images/googleplay.png';
import app from '../../images/app.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="">
                <div className="row justify-content-sm-between">
                    <div className="col-md-8">
                        <img src={logo} alt="" className='w-25' />
                        <p>Chaldal.com is an online shop available in Dhaka, Narayanganj, Chattogram and Jashore. We believe time is valuable to our fellow residents, and that they should not have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Chaldal delivers everything you need right at your door-step and at no additional cost.</p>
                    </div>
                    <div className="col-md-3 d-flex">
                        <img src={google} alt="" className='app-icon-footer' />
                        <img src={app} alt="" className='app-icon-footer' />
                    </div>
                </div>
                <div className="row footer-des">
                    <div className="col-md-3">
                        <h5>Customer Service</h5>
                        <p>Contact Us</p>
                        <p>FAQ</p>

                    </div>
                    <div className="col-md-3">
                        <h5>Customer Service</h5>
                        <p>Contact Us</p>
                        <p>FAQ</p>

                    </div>

                    <div className="col-md-3">
                        <h5>Customer Service</h5>
                        <p>Contact Us</p>
                        <p>FAQ</p>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Footer;