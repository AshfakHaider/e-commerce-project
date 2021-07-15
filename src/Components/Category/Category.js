import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import './Category.css'

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/a53c58d9-1852-43d2-99b8-bda5354faa0a')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data);
            })

    }, [])
    return (
        <div className="text-center category">

            <h1>Our Categories</h1>
            <div className="">
               
                <div className=" d-flex justify-content-center">
                    <div className="w-75 row">
                        {
                            categories.map(category => <CategoryDetails key={category.id} category={category}></CategoryDetails>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Category;







  
 
  

