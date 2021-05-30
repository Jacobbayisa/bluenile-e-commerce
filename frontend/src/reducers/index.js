import { combineReducers } from "redux";
import productListReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});
