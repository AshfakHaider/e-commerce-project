import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import './Category.css'

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/ceb3fedb-4945-4b47-a916-1cfdd34bcbaf')
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