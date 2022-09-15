import { combineReducers } from "redux";
import productReducer from "./products/products.reducer";
import userReducer from "./users/userSlice";
// import userReducer from "./users/users.reducers";
// import productReducer from "./users/users.reducer"

const rootReducer = combineReducers({
  productReducer,
  userReducer

});

export default rootReducer;
