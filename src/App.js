import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/Product/SingleProduct/SingleProduct.js';
import AddFashion from './Components/Dashboard/AddProduct/AddFashionPd';
import AddFood from './Components/Dashboard/AddProduct/AddFoodPd';
import AddGrocaryPd from './Components/Dashboard/AddProduct/AddGrocaryPd';
import AllGrocaryProduct from './Components/Dashboard/AllProducts/Grocary/AllGrocaryProduct';
import RiseLoader from "react-spinners/RiseLoader";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import FashionProduct from './Components/Dashboard/AllProducts/Fashion/FashionProduct';
import Food from './Components/Dashboard/AllProducts/Food/Food'
import AddReview from './Components/Dashboard/AddReview/AddReview';
import SidebarTest from './Components/SidebarTest/SidebarTest';
import CheckOut from './Components/CheckOut/CheckOut';
import AllReview from './Components/Dashboard/AllReview/AllReview';
import NavTop from './Components/Nav/NavTop';
import Nav from './Components/Nav/Nav'
import AddTopProduct from './Components/Dashboard/AddProduct/AddTopProduct';
import Search from './Components/Search/Search';

export const UserContext = createContext();


function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 2000)
  }, [])

  const [loggedInUser, setLoggedInUser] = useState(useState({
    isSignedIn: false,
    name: '',
    email: '',
    img: ''
  }));

  if (load) {
    return (
      <div className="loader">
        <RiseLoader
          size={20} color={"#2C3C44"} loading={load} speedMultiplier={1} />

      </div>
    )
  }
  else {
    <Home />
  }


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>



        <Switch>
          <Route path='/home'>
            <NavTop/>
            <Nav/>
            <Home />
            <Footer />
          </Route>
          <Route path='/searchPd/:name'>
            <NavTop/>
            <Nav/>
            <Search/>
            <Footer/>
          </Route>
          <Route path='/dashboard'>
            <SidebarTest />
            <Dashboard />
          </Route>
          <Route path='/login'>
            <NavTop/> 
            <Nav />
            <Login />
            <Footer />
          </Route>
          <Route path='/product/:id'>
          <NavTop/>
            <Nav />
            <SingleProduct />
            <Footer />
          </Route>
  
          <Route path='/checkOut'>
          <NavTop/>
          <Nav/>
            <CheckOut />
          </Route>
          <Route exact path='/'>    
            <NavTop/>
            <Nav/>
            <Home></Home>
            <Footer />
            {/* <TestHome/> */}
          </Route>

          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/allProducts/grocary'>
          <NavTop/>
            <Nav />
            <AllGrocaryProduct />
            <Footer />
          </Route>
          <Route path='/addProduct/addGrocary'>
            <SidebarTest />
            <AddGrocaryPd />
          </Route>
          <Route path='/addProduct/addFashion'>
            <SidebarTest />
            <AddFashion />
          </Route>
          <Route path='/addProduct/addFood'>
            <SidebarTest />
            <AddFood />
          </Route>
          <Route path='/addProduct/topProduct'>
            <SidebarTest />
            <AddTopProduct />
          </Route>

          <Route path='/allProducts/fashion'>
          <NavTop/>
            <Nav/>
            <FashionProduct />
            <Footer />
          </Route>
          <Route path='/allProducts/food'>
          <NavTop/>
            <Nav />
            <Food />
            <Footer />
          </Route>
          <Route path='/addReview'>
            <SidebarTest/>
            <AddReview />
          </Route>
          <Route path='/allReview'>
            <SidebarTest/>
            <AllReview/>
          </Route>
          <Route path="*">
          <NavTop/>
            <Nav/>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
