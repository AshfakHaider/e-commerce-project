import React from 'react';
import './CategoryDetails.css'

const CategoryDetails = ({ category }) => {
    const { name, picture, description } = category;
    return (
        <div className="categoryDetails">
            <div className="categoryBox">
                <img src={picture} alt="" className='categoryImg' />
                <h4>{name}</h4>
                <button className='shopBtn'>Shop Now</button>
            </div>
        </div>
    )
};

export default CategoryDetails;