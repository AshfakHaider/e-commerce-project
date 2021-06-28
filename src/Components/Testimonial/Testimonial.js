import React from 'react';
import './review.js'
import Review from './review.js';

const Testimonial = () => {
    return (
        <main>
        <div className="container testimonial">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review/>
        </div>
      </main>
  
    );
};

export default Testimonial;