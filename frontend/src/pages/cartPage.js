import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import addToCart from "../actions/cartActions";

const CartPage = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  console.log("ProductId:" + productId + "Quantity" + qty);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      console.log("this is from use effect");
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1> CART SCREEN</h1>
      <p>
        ADDTOCART: productId: {productId} Quantity: {qty}{" "}
      </p>
    </div>
  );
};

export default CartPage;
