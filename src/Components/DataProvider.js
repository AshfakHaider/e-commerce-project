// import React, { createContext, useEffect, useState } from 'react';

// export const DataContext = createContext()

// export const DataProvider = (props) => {
//     const [cart,setCart] = useState([])
//     const [products,setProducts] = useState([])
//     const [loading, setLoading] = useState(true);
//     const [loggedInUser, setLoggedInUser] = useState (useState({
//         isSignedIn: false,
//         name: '',
//         email: '',
//         img: ''
//       }));

//       useEffect(() => {
//         setLoading(true);
//         fetch('https://eco-shop-db.herokuapp.com/products')
//             .then(res => res.json())
//             .then(data => {
//                 //console.log(data);
//                 setProducts(data);
//                 setLoading(false)
//             })
//     }, [])
//     const addCart = (id) =>{

//             const data = products.filter(product =>{
//                 return product._id === id
//             })
//             setCart([...cart, ...data]);
//            console.log(cart)
        
//     }


//       const value = {
//         login:[loggedInUser,setLoggedInUser],
//         products:[products,setProducts],
//         Cart:[cart,setCart] ,
//         addCart:addCart
//     }
    

//     return (
//        <DataContext.Provider value={value}>
//            {props.children}
//         </DataContext.Provider>
//     );
// };

// export default DataProvider;