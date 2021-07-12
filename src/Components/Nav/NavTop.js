import { faGlobe, faHeart,  faMapMarkerAlt, faQuestionCircle,  faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import './NavTop.css'

const NavTop = () => {
  return (
    <div className="navTop divider font container-fluid">
      <div className="d-flex justify-content-lg-between">
        <div className="nav-top-left d-flex">
          <div className="d-flex">
            <FontAwesomeIcon icon={faGlobe} className='nav-icon ms-md-2 me-md-2' />
            <p>ENGLISH (INTL)</p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon icon={faQuestionCircle} className='nav-icon ms-md-4 me-md-2 ' />
            <p>How Can We Help You?</p>
          </div>
          <p className='ms-md-4'>Sustainabilty</p>
        </div>
        <div className="nav-top-right">
          <div className="d-flex">
             <FontAwesomeIcon icon={faHeart} className='nav-icon me-md-3'/>
             <FontAwesomeIcon icon={faMapMarkerAlt} className='nav-icon ms-md-3 me-md-3'/>
             <FontAwesomeIcon icon={faUser} className='nav-icon ms-md-3 me-md-3'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;