import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import heroImg from '../../images/basket-full-vegetables.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-section justify-content-center align-content-center">
            <div className="container-fluid">
                <div className="hero-content">
                    <div className="col">
                        <h1><span className='h-top'>Super</span><br /><span className='h-mid'>Grocary</span><br /><span className='h-bottom'>Sale</span></h1>
                        <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam consequuntur odit ducimus laboriosam eligendi odio ipsa cum assumenda asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, iusto!</p>
                        <button className='submitBtn'>Shop Now <FontAwesomeIcon icon={faArrowRight}/></button>
                    </div>
                    <div className="col text-left">
                        <img src={heroImg} alt="" className=' heroImg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;