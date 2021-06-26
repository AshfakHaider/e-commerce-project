import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo_.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faQuestionCircle, faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
    // const [show,handleShow] = useState(false)
    // const transitionNavBar = () =>{
    //     if(window.scrollY > 100){
    //         handleShow(true);
    //     }
    //     else{
    //         handleShow(false)
    //     }
    // }
    // useEffect(()=>{
    //     window.addEventListener('scroll',transitionNavBar);
    //     return () => window.removeEventListener('scroll',transitionNavBar)
    // },[])
    return (
        <nav id="navbar" className=  'active'>
            <div>
                <div className="d-flex">
                    <div className="logo">
                        <img src={logo} alt="" className='nav-logo' />
                    </div>
                    <div className="input col-md-6 mt-2 ms-5">
                        <input type="text" placeholder="Search for products(e.g. eggs,milk,potato)" className='form-control' />
                    </div>
                    <FontAwesomeIcon icon={faSearch} className='navbar-icon search-icon' />
                    <div className="navbar-item d-flex">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className='navbar-icon me-2' />
                        <h2 className='nav-text'>Dhaka</h2>
                        <FontAwesomeIcon icon={faSortDown} className=' ms-2 arrow-icon' />
                    </div>
                    <div className="navbar-item d-flex">
                        <FontAwesomeIcon icon={faQuestionCircle} className='navbar-icon me-2' />
                        <h2 className='nav-text mt-3'>Help & More</h2>
                    </div>
                    <div className="navbar-item d-flex">
                        <h2 className='nav-text mt-3'>EN | BN</h2>
                    </div>
                    <div className=" d-flex">
                        <button className='signInBtn'>Sign In</button>
                    </div>

                </div>

            </div>
        </nav>

    );
};

export default Navbar;