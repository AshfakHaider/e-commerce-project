import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sucess.css'
import sucess from '.././images/sucess.png'

const Sucess = () => {
    return (
        <div className="success">
            <div className="sucess-msg container-fluid">
                <div className="text-center">
                    <h1>Your Order Has Been Placed Successfully</h1>
                    <img src={sucess} alt="" className='w-25' />
                   <div>
                        <Link to="/">Go back to shop</Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Sucess;