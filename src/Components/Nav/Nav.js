import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import './Nav.css'
import logo from '../../images/logo2.png'
import { Link, useHistory } from 'react-router-dom';
import { faHeart, faLocationArrow, faMapMarkerAlt, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search/Search';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart/CartContext';



const Nav = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const { itemCount } = useContext(CartContext)


    return (
        <div className='font divider container-fluid main-nav '>

            <nav class="navbar  navbar-expand-lg navbar-light   ">

                <div className="nav-top ">
                    <button class="custom-toggler navbar-toggler me-md-0 me-5" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand logo ms-md-0 ms-4 me-md-0 me-5" href="/">
                        {/* <img src={logo} alt="" className='logoImg' /> */}
                        <h5 className='logo-text'><span className='left text-center'>Eco</span>-<span className='right'>Shop</span> </h5>
                    </a>
                    <div className=" ms-md-0 ms-5 mt-2">
                        <Link to='/cart'>
                            <div className="d-flex">
                                <span className="count-mobile">{itemCount}</span>
                                <FontAwesomeIcon icon={faShoppingCart} className="custom-icon-mobile-cart" />
                            </div>
                        </Link>
                    </div>
                </div>


                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09" >
                    <ul className=' nav-items m-auto'>
                        <li><Link to='/home'><h6>Home</h6></Link></li>
                        <li><Link to='/shop/Grocaries'><h6>Grocaries</h6></Link></li>
                        <li><Link to='/shop/Fashion'><h6>Fashion</h6></Link></li>
                        <li><Link to='/shop/Food'><h6>Food</h6></Link></li>
                        <li><Link to='/'><h6>About Us</h6></Link></li>
                        <li><Link to='/'><h6>Contact Us</h6></Link></li>

                    </ul>
                </div>

                <div className="nav-icons" style={{ cursor: 'pointer' }}>

                    <Link to='/cart'>
                       
                            <span className="count">{itemCount}</span>
                            <FontAwesomeIcon icon={faShoppingCart} className="custom-icon-desktop" />
                    </Link>




                        <FontAwesomeIcon icon={faMapMarkerAlt} className="custom-icon-desktop" />
                        <FontAwesomeIcon icon={faHeart} className="custom-icon-desktop" />
                </div>


            </nav>

        </div>
            );
};

            export default Nav;