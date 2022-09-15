import ActionTypes from "./products.types";
import {
    updateUserDetails,
    createNewUser,
    deleteOldUser
  } from "../../utils/modifier";

const initialState = {
    isFetching: false,
    status: "idle",
    data: [],
    products: [{
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }}],
    details: {},
    related: [],
    errorMessage: null,
    message: null,
  };

  const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.READ_PRODUCTS_START: 
        console.log("Read products start")
            return {
                ...state,
                isFetching:true,
            }
        case ActionTypes.READ_PRODUCTS_SUCCESS:
            console.log("Read Products Success!")
            console.log("data: ",action.payload)
            return {
                ...state,
                isFetching: false,
                products: action.payload
            }
        case ActionTypes.READ_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching:false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
  }

  export default productReducer;