import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

const Productspage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    try {
      axios.get("http://localhost:8000/api/products").then((res) => {
        setProducts(res.data);
        console.log();
      });
    } catch (err) {
      console.log(err + "There is erro on server");
    }
  }, []);
  console.log(products.isArray());
  const names = ["jacob", "Tamirat", "Michael", "sara"];
  console.log(typeof products);
  // const pro = products.map((product) => {
  //   console.log(product.type);
  // });
  return (
    <div>
      {/* {products &&
        products.map((product) => {
          return <Product image={product.image}></Product>;
        })} */}
    </div>
  );
};

export default Productspage;
