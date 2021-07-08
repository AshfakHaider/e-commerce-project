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
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import AllProduct from './Components/Dashboard/AllProducts/AllProduct';
import TestHome from './Components/TestHome/TestHome';
import RiseLoader from "react-spinners/RiseLoader";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';

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
        {/* <Navbar /> */}
        

        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>


          <Route path='/product/:id'>
            <SingleProduct />
          </Route>
          <Route exact path='/'>
            <Home></Home>
            {/* <TestHome/> */}
          </Route>
        </Switch>
      </Router>
      <Footer/>
      <Router>
        {/* <SidebarDash /> */}
        <Switch>
          <Route path='/allProducts'>
            <AllProduct />
          </Route>
          <Route path='/addProduct'>
            <AddProduct />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
