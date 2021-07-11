import React from 'react';

const AllReviewDetails = ({rv}) => {
    const{_id,name,job,imageUrl,review}= rv;

    const deleteReview = id =>{
        fetch(`http://localhost:5000/deleteReview/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('deleted successfully')
            refreshPage();
        })
    }
    const refreshPage = () =>{
        window.location.reload()
    }
    return (
    
     <div className="col-md-4 col-sm-6 col-xs-12 mt-4 mb-4">
        <div className="pdCard">
            <div className="pdImg-dashboard">
                <img src={imageUrl} alt="" />
            </div>
            <div className="pd-info mt-3">
                <h6>{name}</h6>
                <p>{job}</p>
                <p>{review}</p>
            </div>
        </div>
        <button className='shopBtn btn-danger text-dark ' onClick={()=>deleteReview(_id)}>Delete Review</button>
        </div>

    );
};

export default AllReviewDetails;