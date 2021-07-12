import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import './Nav.css'
import logo from '../../images/logo2.png'
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div className='font  container-fluid main-nav'>

            <nav class="navbar navbar-expand-lg navbar-light   ">

                <a class="navbar-brand logo" href="/">
                    {/* <img src={logo} alt="" className='logoImg' /> */}
                    <h5><span className='left'>Eco</span>-<span className='right'>Shop</span> </h5>
                </a>

                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09" >
                    <ul className=' nav-items'>
                        <li><Link to='/home'><h6>Home</h6></Link></li>
                        <li><Link to='/'><h6>Grocaries</h6></Link></li>
                        <li><Link to='/'><h6>Fashion</h6></Link></li>
                        <li><Link to='/'><h6>Food</h6></Link></li>
                        <li><Link to='/'><h6>Men's Fashion</h6></Link></li>
                        <li><a href='/'><h6>Woman's Fashion</h6></a></li>
                    </ul>
                </div>
                
            </nav>
            <div className="search ">
                    <div className="d-flex search-field  ">
                        <input type="text" placeholder="Search Products" name="" id="" className='search-input form-control' />
                        <button className='searchBtn'>Search</button>
                      
                    </div>
                </div>
        </div>
    );
};

export default Nav;