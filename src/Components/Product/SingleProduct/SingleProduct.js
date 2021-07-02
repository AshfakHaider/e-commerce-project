import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = ({name,image,price}) => {
    const {pd} = useParams()
    console.log(name,image,price);
    return (
        <div>
            <h3>{pd}</h3>
            <img src={image} alt="" />
            <p>{price}</p>
            
        </div>
           
       
    );
};

export default SingleProduct;