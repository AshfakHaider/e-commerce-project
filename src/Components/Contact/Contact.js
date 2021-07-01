import React from 'react';
import './Contact.css'
import google from '../../images/googleplay.png';
import app from '../../images/app.png';
import mobile from '../../images/mobile.png'


const Contact = () => {
    return (
        <div className="contact font text-center">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <h6>Be a proud part of our community</h6>
                        <div className="d-flex mb-4">
                            <input type="text" placeholder="Enter Your Email" name="Email" className='form-control' />
                            <button className='form-btn'>Submit</button>
                        </div>
                        <div className="d-flex" style={{cursor:'pointer'}}> 
                            <img src={google} alt="" className='app-icon' />
                            <img src={app} alt="" className='app-icon' />
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <img src={mobile} alt="" className='w-100 form-img'  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;