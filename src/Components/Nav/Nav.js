import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import './Nav.css'
import logo from '../../images/logo2.png'
import { Link, useHistory } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import Search from '../Search/Search';



const Nav = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const history = useHistory()
    const onSubmit = () => {

        const searchValue = document.getElementById('input').value;

         history.push(`/searchPd/${searchValue}`)
        refreshPage()

    }
    const refreshPage = () => {
        window.location.reload();
    }


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
            <div className="search">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="d-flex search-field ">
                        <input type="text" placeholder="Search Products" name="search" id="input" className='search-input form-control' />
                        <button className='searchBtn' type='submit'>Search</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Nav;