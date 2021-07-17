import React from 'react';
import { useState } from 'react';

const OrderDetails = ({ order }) => {
    const {_id, firstName, lastName, address, district, city, phoneNumber, email, products,total } = order;
    const deleteProduct = id => {
  
        fetch(`https://eco-shop-db.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleted successfully');
                 refreshPage();
            })
    }
    const refreshPage = () =>{
        window.location.reload();
    }

    return (
        <div className='col-md-5 col-lg-5 col-sm-6 col-xs-12 order-box '>
            <div className="box-inside">
                <h5> Name: <b className='text-success mt-1 mb-1'>{firstName} {lastName}</b></h5>
                <p className='mt-1 mb-1'>Address: <b>{address}</b> </p>
                <p className='mt-1 mb-1'>District: <b>{district}</b> </p>
                <p className='mt-1 mb-1'>City:{city}</p>
                <h6>Contact: <b className="text-danger mt-1 mb-1">{phoneNumber}</b> </h6>
                <h6>Email : <b className='text-success mt-1 mb-2'>{email}</b> </h6>
                <h5 className='text-success mt-4'> <b>Ordered Products</b> </h5>
                {
                    products.map((product, index) => {

                        return (
                            <div className="products-order">
                                <h5>Name:{product.name}</h5>
                                <img src={product.imageUrl} alt="" className='w-25' />
                                <p className='text-danger'>Quantity: <b>{product.quantity}</b> </p>
                                <p><b>Subtotal:{total}</b></p>
                            </div>
                        )
                    })
                }
            </div>
            <button className='submitBtn' onClick={() =>deleteProduct(_id)}>Delete Order</button>
        </div>
        
    );
};

export default OrderDetails;