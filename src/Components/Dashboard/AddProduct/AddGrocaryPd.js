import React from 'react';
import './AddGrocaryPd.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import SidebarTest from '../../SidebarTest/SidebarTest';



const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imgUrl, setImgUrl] = useState(null);
    const [banner,setBanner] = useState(null)

    const onSubmit = data => {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const piece = document.getElementById('piece').value;
        const category = document.getElementById('category').value;
        const brand = document.getElementById('brand').value;
        const sub = document.getElementById('subCategory').value
        // const img = document.getElementById('image').value;
        
        const eventData = {
            name: name,
            price: price,
            piece: piece,
            category: category,
            brand:brand,
            subCategory:sub,
            imageUrl: imgUrl,
        }
        //console.log(eventData);
        const url = `https://eco-shop-db.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('server side response', res)
               refreshPage(); 
               
            });
    };

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




    const refreshPage = () =>{
        window.location.reload();
    }

    return (
        <div className="addProduct font d-flex">

            <div className="container-fluid ms-md-3 ms-0 ">
                <h2 className='text-center'>Add Grocary Product On Database</h2>
                <div className="m-auto col-lg-8 col-sm-6 col-xs-10 col-md-7 text-center ">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <h6 className='label'>Enter Product Name</h6>
                        <input type="text" name="name" placeholder='Enter product name' id='name' className='form-control' />
                        <br />
                        <h6 className='label'>Enter Product Price</h6>
                        <input type='text' name='price' placeholder='Enter Product Price' id='price' className='form-control' />
                        <br />
                        <h6 className='label'>Enter How Many Pieces Are In Stock</h6>
                        <input type='text' name='piece' placeholder='How many pieces are in stock' id='piece' className='form-control' />
                        <br />
                        <h6 className='label'>Enter Product Brand Name</h6>
                        <input type='text' name='brand' placeholder='Brand' id='brand' className='form-control' />
                        <br />
                        <h6 className='label'>Enter Product Category</h6>
                        <input type='text' name='piece' placeholder='Category' id='category' className='form-control' defaultValue="Grocary" />
                        <br />
                        <h6 className='label'>Enter Sub Category</h6>
                        <input type='text' name='piece' placeholder='Sub Category' id='subCategory' className='form-control' />
                        <br />
                        <h6 className='label'>Enter Product Picture</h6>
                        <input type="file" onChange={handleImgUpload} className='form-control'/>
                        {/* <input type="text" name="iamge" id="image" className='form-control' /> */}
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

export default AddProduct;