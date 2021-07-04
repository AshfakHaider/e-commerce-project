import React from 'react';
import { useState } from 'react';
import './AllProductDetails.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';



Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #009E7F',
        background: '#009E7F',
        padding:'10px 30px'
    },
};


const AllProductDetails = ({ product }) => {
    const [pdLoad,setPdLoad] = useState([]);
    const [imgUrl, setImgUrl] = useState(null);

    const { _id, name, imageUrl, price, piece, brand, category } = product;

    // deleting product
    const deleteProduct = id => {
        fetch(`https://eco-shop-db.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleted successfully');
                refreshPage();
            })
    }
    // function refreshPage() {
    //     window.location.reload();
    // }
    const refreshPage = () => {
        window.location.reload();
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    // }

    function closeModal() {
        setIsOpen(false);
    }
    const loadProduct = id =>{
        openModal();
        //console.log(id)
        fetch(`https://eco-shop-db.herokuapp.com/product/${id}`)
        .then(res=> res.json())
        .then(data=>{
            //console.log(data)
            setPdLoad(data);
        })
    }
    //console.log(pdload);
    // update product
    // facing auto call problem maybe for props needs to be fixed 
    const updateProduct = id =>{
        const name = document.getElementById('nameUpdate').value;
        const price = document.getElementById('priceUpdate').value;
        const piece = document.getElementById('pieceUpdate').value;
        const brand = document.getElementById('brandUpdate').value;
        const category = document.getElementById('categoryUpdate').value;
        const updatedProduct = {
            name: name,
            price: price,
            piece: piece,
            category: category,
            brand:brand,
            imageUrl: imgUrl
        };
        fetch(`https://eco-shop-db.herokuapp.com/updateProduct/${id}`, {
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProduct)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data,'updated success!!')
        })
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
            <div className="upDelBtn d-flex justify-content-between" >
                <button className='btn btn-warning me-2' onClick={()=> loadProduct(_id)}>Update </button>
                <div>
                    <button className='btn btn-danger ms-2' onClick={() => deleteProduct(_id)}>Delete </button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >

                <div className="modal-section font text-center">
                    <div className="modalIconDiv">
                        <FontAwesomeIcon onClick={closeModal} icon={faWindowClose} className='modal-icon' />
                    </div>
                    <h3 className='text-center text-warning'>Update Product</h3>
                    <form>
                        <h6 className='label-modal'>Enter Product Name</h6>
                        <input type='text' defaultValue={pdLoad.name} placeholder='Enter Product Name' className='form-control mt-2 mb-2' id='nameUpdate' />
                        <h6 className='label-modal'>Enter Product Price</h6>
                        <input type='text'  defaultValue={pdLoad.price} placeholder='Enter Product Price' className='form-control mt-2 mb-2' id='priceUpdate' />
                        <h6 className='label-modal'>Enter How Many Pieces Are In Stock</h6>
                        <input type='text' defaultValue={pdLoad.piece} placeholder='Enter How Many Pieces Are In Stock' className='form-control mt-2 mb-2' id='pieceUpdate' />
                        <h6 className='label-modal'>Enter Product Brand Name</h6>
                        <input type='text' defaultValue={pdLoad.brand} placeholder='Enter Product Brand Name' className='form-control mt-2 mb-2' id='brandUpdate' />
                        <h6 className='label-modal'>Enter Product Category</h6>
                        <input type='text' defaultValue={pdLoad.category} placeholder='Enter Product Category' className='form-control mt-2 mb-2' id='categoryUpdate' />
                        <h6 className='label-modal'>Enter Product Picture</h6>
                        <input type='file' placeholder='Enter Product Picture' className='form-control mt-2 mb-2' id='imageUpdate' onChange={handleImgUpload} />
                        <button onClick={()=> updateProduct(_id)} className='btn btn-warning mt-3'>Update Product</button>
                    </form>
                </div>

            </Modal>


        </div>
    );
};

export default AllProductDetails;