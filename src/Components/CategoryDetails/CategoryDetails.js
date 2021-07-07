import React from 'react';
import './CategoryDetails.css'

const CategoryDetails = ({ category }) => {
    const { name, picture, description } = category;
    return (
        <div className="col-md-4 d-flex justify-content-center m-auto">
            <div className="">
                <img src={picture} alt="" className='categoryImg w-100' />
                <h4>{name}</h4>
                <div className="spBtn">
                <button className='shopBtn'>Shop Now</button>
                </div>
            </div>
        </div>
    )
};

export default CategoryDetails;