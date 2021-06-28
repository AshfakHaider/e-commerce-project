import React from 'react';
import './HeaderContent.css';
import cow from '../../images/cow.png';
import mango from '../../images/mango.png'

const HeaderContent = () => {
    return (
       
        <div className="headerContent">
            <div className="image-container ">
                <div className="first">
                    <img src={mango} alt="" className='w-100' />
                </div>
                <div className="second">
                    <img src={cow} alt="" className='w-100' />
                </div>
            </div>
        </div>
       
    );
};

export default HeaderContent;