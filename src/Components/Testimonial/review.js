import React, { useState } from 'react';
import people from './data';
import './Testimonial.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";



const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];
  const checkNumber = (number) =>{
      if(number>people.length-1){
        return 0;
      }
      if(number <0){
        return people.length -1
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
    let randomNumber =Math.floor(Math.random() * people.length);
    if(randomNumber === index){
      randomNumber = index +1;
    }
    setIndex(checkNumber(randomNumber))
    // console.log(randomNumber);
  }
  
  return (
    <article className='review font'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
        </span>
      </div>
      <div className="author">{name}</div>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
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
  );
};

export default Review;
