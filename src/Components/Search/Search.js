import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchDetails from './SearchDetails';

const Search = () => {
    const { name } = useParams();
    const [searchItem, setSearchItem] = useState([])
    useEffect(() => {
        fetch(`https://eco-shop-db.herokuapp.com/search?query=${name}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setSearchItem(data);
            })

    }, [])
    
 


    return (
        <div className="searchResult font mt-5 mb-5">
            <div className="text-center text-danger"><h3>Search Results For {name}</h3></div>
            <div className="container-fluid">
                <div className="d-flex justify-content-center pd">
                    <div className="w-75 row">
                        {
                            searchItem.map(items => <SearchDetails items={items} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;