import React from 'react';
import './AllProductDetails.css';


const AllProductDetails = ({ product }) => {
    const {_id, name, imageUrl, price, piece, brand,category } = product;
    const deleteProduct = id =>{
        fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('deleted successfully');
        })
    }
    function refreshPage(){
        window.location.reload();
    } 
    return (
        <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pdCard">
                <div className="pdImg-dashboard">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="pd-info mt-3">
                    <h6>{name}</h6>
                    <p>{brand}</p>
                    <p>{category}</p>
                    <span className='text-dark'>{piece} pcs</span>
                    <p className='text-danger'>{price} taka</p>
                </div>

              
            </div>
            <div className="upDelBtn d-flex justify-content-between" onClick={refreshPage}>
                    <button className='btn btn-warning me-2'>Update </button>
                    <button className='btn btn-danger ms-2' onClick={()=>deleteProduct(_id)}>Delete </button>
                </div>
        </div>
    );
};

export default AllProductDetails;