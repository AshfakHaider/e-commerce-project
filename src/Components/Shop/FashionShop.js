import React, { useEffect, useState } from 'react';
import FashionDetails from './FashionDetails';
import './GrocaryShop.css'

const FashionShop = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://eco-shop-db.herokuapp.com/search?query=fashion`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, [])


    return (
        <div className="shop-fashion font">
            <div className="banner-fashion">
                <div className="banner-content">
                    <h1 className='text-center'>Fashion Items</h1>
                    <p className='text-center text-black p-3 font-weight-lighter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quis natus saepe, debitis omnis dolore tempora labore deleniti obcaecati est exercitationem veniam quia maiores delectus culpa consectetur quidem reiciendis magni.</p>
                </div>
            </div>
            <div className="d-flex justify-content-center pd">
                <div className="w-75 row">
                    {
                        product.map(pd => <FashionDetails
                            key={pd.id} product={pd}
                        />)
                    }

                </div>

            </div>

        </div>
    );
};

export default FashionShop;