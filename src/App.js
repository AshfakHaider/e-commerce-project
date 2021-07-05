import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/Product/SingleProduct/SingleProduct.js';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import AllProduct from './Components/Dashboard/AllProducts/AllProduct';
import TestHome from './Components/TestHome/TestHome';

export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState(useState({
    isSignedIn: false,
    name: '',
    email: '',
    img: ''
  }));
  

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/allProducts'>
            <AllProduct />
          </Route>
          <Route path='/addProduct'>
            <AddProduct />
          </Route>
          <Route path='/product/:id'>
            <SingleProduct />
          </Route>
          <Route exact path='/'>
            <Home />
            {/* <TestHome/> */}
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
