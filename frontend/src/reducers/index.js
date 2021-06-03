import { combineReducers } from "redux";
import productListReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
