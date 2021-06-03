import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  const data = await axios.get(
    `http://localhost:8000/api/products/${productId}`
  );
  console.log("this is data" + data);
  console.log(data);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export default addToCart;
