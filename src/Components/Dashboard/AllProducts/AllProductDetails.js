import React from 'react';
import { useState } from 'react';
import './AllProductDetails.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

const AllProductDetails = ({ product }) => {

    const { _id, name, imageUrl, price, piece, brand, category } = product;
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
    const refreshPage = () =>{
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
                <button className='btn btn-warning me-2' onClick={openModal}>Update </button>
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
            

                <button onClick={closeModal}>close</button>
                <div className=''>Simple modal</div>
                <form>
                    <input />
                    <button>tab navigation</button> <br />
                    <button>stays</button> <br />
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>


        </div>
    );
};

export default AllProductDetails;