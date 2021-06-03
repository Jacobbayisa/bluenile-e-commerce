import ProductDetailsPage from "./pages/productDetailsPage";
import ProductListPage from "./pages/productListPage";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartPage from "./pages/cartPage";
import "./app.css";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [headerBackground, setHeaderBackground] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className={headerBackground ? "row active" : "row"}>
          <div>
            <Link className="brand" to="/">
              BlueNile
            </Link>
          </div>
          <div>
            <Link to="/"> Products </Link>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge"> {cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/product/:id" component={ProductDetailsPage}></Route>
          <Route path="/" component={ProductListPage} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
