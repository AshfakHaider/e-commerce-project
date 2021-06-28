import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
    return (
        <section className="header">
            <div className=" header-content text-center">
                <h1>Groceries delivered in 1 hour</h1>
                <div className="col-md-8 m-auto d-flex">
                    <input type="text" placeholder="Search for products(e.g. eggs,milk,potato)" className='form-control' />
                    <FontAwesomeIcon icon={faSearch} className='navbar-icon header-icon' style={{ cursor: 'pointer' }} />
                </div>
            </div>

        </section>
    );
};

export default Header;