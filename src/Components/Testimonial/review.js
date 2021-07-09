import React, { useEffect, useState } from 'react';
//import people from './data';
import './Testimonial.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";



const Review = () => {
  const [reviews,setReviews] = useState([])

  useEffect(()=>{
     fetch('http://localhost:5000/review')
     .then(res => res.json())
     .then(data=>{
       console.log(data);
       setReviews(data);
     })
  },[])

  //const {name,job,imageUrl,review} = rv;
  const [index,setIndex] = useState(0);

  const checkNumber = (number) =>{
      if(number>reviews.length-1){
        return 0;
      }
      if(number <0){
        return reviews.length -1
      }
      return number;
  }

  const nextPerson = () =>{
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const prevPerson = () =>{
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  const randomPerson = () => {
    let randomNumber =Math.floor(Math.random() * reviews.length);
    if(randomNumber === index){
      randomNumber = index +1;
    }
    setIndex(checkNumber(randomNumber))
    // console.log(randomNumber);
  }
  
  return (
      <div>
        {
          reviews.map(review=>{
            return(
               <article className='review container-fluid font'>
              <div className="img-container">
                <img src={review.imageUrl} alt={review.name} className='person-img' />
                <span className="quote-icon">
                  <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                </span>
              </div>
              <div className="author">{review.name}</div>
              <p className="job">{review.job}</p>
              <p className="info">{review.review}</p>
              <div className="button-container">
                <button className='prev-btn' onClick = {prevPerson}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className='next-btn' onClick={nextPerson} >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <button className='random-btn' onClick={randomPerson}>
                  Suprise Me
                </button>
            </article>
              
            )
          })
        }
      </div>
  );
};

export default Review;
