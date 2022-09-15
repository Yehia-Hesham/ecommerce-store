import React, { useEffect } from 'react';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import './App.css';
import { useDispatch, useSelector, connect} from 'react-redux';
import { Provider } from 'react';
// import readProducts from "./store/products/products.service";
import { readProducts } from './store/products/products.actions';
import { readProductsTemp } from './store/products/products.actions';
import 'flowbite';


import Example from './components/storeNavigation/storeNavigation';
// import NavbarWithCart from './components/navbarWithCart/NavbarWithKart';
import Navbar from './components/navbar/navbar';
import SignUpForm from './components/signUpForm/signUpForm';
import SignInForm from './components/signInForm/signInForm';
import ItemListing from './components/itemListing/itemListing';
// import ItemListing from './components/itemListing/itemListingcopy';
import { configureStore } from '@reduxjs/toolkit';
import store from './store/store';
import NavbarWithCart2 from './components/navbarWithCart/NavbarWithKart copy';
import Section from './components/section/section';
import { selectUser } from './store/users/userSlice';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(readProducts())

    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=> dispatch(readProductsTemp(json)))
  },[])
  // useEffect(() => {
  //   dispatch()
  // })

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          <Route path='/' element = {
              <>
              {/* <Example/> */}
                {/* <Navbar/> */}
                {/* <NavbarWithCart/> */}
                {user? <>
                  <NavbarWithCart2/>
                  <ItemListing />
                  </> : <SignInForm/>
                }
              </>}/>
            <Route path='/shop' element = {
              <>
              {/* <Example/> */}
                {/* <Navbar/> */}
                {/* <NavbarWithCart/> */}

                <NavbarWithCart2/>
                <ItemListing />
              </>}/>
            <Route path='/sign-in' element = {<SignInForm/>}/>
            <Route path='/sign-up' element = {<SignUpForm/>}/>
            <Route path='/items-listing' element = {<ItemListing/>}/>
            <Route path='/item-description' element = {<Section/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
