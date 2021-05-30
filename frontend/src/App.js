import Productspage from "./pages/productspage";
import HomePage from "./pages/homepage";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./app.css";

function App() {
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
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={Productspage}></Route>
          <Route path="/" component={HomePage} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
