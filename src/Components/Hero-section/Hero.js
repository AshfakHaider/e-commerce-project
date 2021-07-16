import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import heroImg from '../../images/basket-full-vegetables.png'
import './Hero.css'
import { useForm } from "react-hook-form";

const Hero = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = () => {
        const searchValue = document.getElementById('input').value;


        //history.push(`/searchPd/${searchValue}`)
        window.location.assign(`/searchPd/${searchValue}`)
    }
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div className="hero-section justify-content-center align-content-center">
            <div className="container-fluid">
                <div className="hero-content">
                    <div className="col">
                        <h1><span className='h-top'>Super</span><br /><span className='h-mid'>Grocary</span><br /><span className='h-bottom'>Sale</span></h1>
                        <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam consequuntur odit ducimus laboriosam eligendi odio ipsa cum assumenda asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, iusto!</p>

                        <div className="search">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="d-flex search-field ">
                                    <input type="text" placeholder="Search Products" name="search" id="input" className='search-input form-control' />
                                    <button className='searchBtn' type='submit'>Search</button>

                                </div>
                            </form>
                        </div>

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