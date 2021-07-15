import React, { useEffect, useState } from 'react';
import FoodDetails from './FoodDetails';
import './GrocaryShop.css'

const FoodShop = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://eco-shop-db.herokuapp.com/search?query=food`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, [])


    return (
    <div className="food font">
                    <div className="banner-food">
                <div className="banner-content-food">
                    <h1 className='text-center'>Food Items</h1>
                    <p className='text-center text-white p-3 font-weight-lighter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quis natus saepe, debitis omnis dolore tempora labore deleniti obcaecati est exercitationem veniam quia maiores delectus culpa consectetur quidem reiciendis magni.</p>
                </div>
            </div>
            <div className="d-flex justify-content-center pd">
                <div className="w-75 row">
                    {
                        product.map(pd => <FoodDetails
                            key={pd.id} product={pd}
                        />)
                    }

                </div>

            </div>

    </div>    
    )
};

export default FoodShop;