import React, { useEffect, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide,Destroy } from '@splidejs/react-splide';
import './SliderReview.css'
import '../Testimonial.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";



const SliderReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://eco-shop-db.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
    }, [])
    const secondaryOptions = {

        type: 'loop',
        rewind: true,
        gap: '1rem',
        Width: 1000,
        perPage: 1,
        perMove: 1,
        pagination: false,

       

    
    };

    return (
        <div className="wrapper container text-center m-auto justify-content-center mt-5">
            <h2 className='text-center'>Our Reviews</h2>
            <div className="underline"></div>

            <Splide
                options={secondaryOptions}
                hasSliderWrapper
                hasAutoplayControls
                hasAutoplayProgress
                className='col-lg-10 col-md-8 col-xs-6 col-sm-6 justify-content-center slider m-auto'

            
            >
                {reviews.map(review => (
                    <SplideSlide key={review._id}>
                        <div className="review-box">
                            <div className="img-container">
                                <img src={review.imageUrl} alt={review.name} className='person-img' />
                                <span className="quote-icon">
                                    <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                                </span>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12 m-auto text-center">
                                <div className="author">{review.name}</div>
                                <p className="job">{review.job}</p>
                                <p className="info">{review.review}</p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>

    );
};

export default SliderReview;