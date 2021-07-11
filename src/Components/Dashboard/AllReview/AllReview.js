import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllReviewDetails from './AllReviewDetails';

const AllReview = () => {
    const [review,setReview] = useState([]);
    useEffect(()=>{
        fetch('https://eco-shop-db.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setReview(data)
        })
    },[])
    return (
        <div className="container-fluid font">
            <h4 className='text-center'>All Reviews</h4>
            <div className="underline mt-4 mb-4"></div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        review.map(review=><AllReviewDetails rv={review}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReview;