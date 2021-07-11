import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import SidebarTest from '../../SidebarTest/SidebarTest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';


const AddReview = () => {
    const { handleSubmit, formState: { errors } } = useForm();

    const [imgUrl, setImgUrl] = useState(null);

    const onSubmit = data => {
        const name = document.getElementById('name').value;
        const job = document.getElementById('job').value;
        const review = document.getElementById('review').value;
      

        const eventData = {
            name: name,
            job: job,
            review: review,
            imageUrl: imgUrl
        }
        console.log(eventData);
        const url = 'https://eco-shop-db.herokuapp.com/addReview'
        fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res=>{
            console.log('Server side response',res)
            refreshPage();
        })

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(eventData)
        // })
        //     .then(res => {
        //         console.log('server side response', res)
        //         refreshPage()
        //     });
    };
    const refreshPage = () => {
        window.location.reload();
    }



    const handleImgUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '0ad6173cd5aeb795e482f44abb146bbe')
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url)

            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div className="addProduct font d-flex">

            <div className="container-fluid">
                <h2 className='text-center'>Add Review</h2>
                <div className="icons-review text-center mb-3">
                <FontAwesomeIcon icon={faStar} style={{color:'red'}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}  style={{color:'red'}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}  style={{color:'red'}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}  style={{color:'red'}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
               
                </div>
                <div className="m-auto  col-lg-8 col-md-7 col-sm-6 col-xs-12  text-center ">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <h6 className='label'>Enter Your Name</h6>
                        <input type="text" name="name" placeholder='Enter Your name' id='name' className='form-control' />
                        <br />
                        <h6 className='label'>Your Job</h6>
                        <input type='text' name='job' placeholder='Enter Your Job' id='job' className='form-control' />
                        <br />
                        <h6 className='label'>Enter Your Picture</h6>
                        <input type="file" onChange={handleImgUpload} className='form-control' />
                        <br />
                        <h6 className='label'>Enter Your Review</h6>
                       
                        <textarea rows="4" cols="50" name="review" id="review" placeholder='Enter Your Review' className='form-control'></textarea>
                        <br />

                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <div>
                            <button type='submit' className='submitBtn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;