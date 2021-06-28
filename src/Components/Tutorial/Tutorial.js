import React from 'react';
import './Tutorial.css'
import { Carousel } from 'react-bootstrap';
import tut1 from '../../images/tutorial-1.png';
import tut2 from '../../images/tutorial-2.png';
import tut3 from '../../images/tutorial-3.png';



const Tutorial = () => {
    return (
        <section className="tutorial ">
            <div className="col-md-10 m-auto">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={tut1}
                            alt="First slide"
                        />
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={tut2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={tut3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>

    );
};

export default Tutorial;