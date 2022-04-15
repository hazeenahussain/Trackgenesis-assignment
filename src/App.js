import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Products from "./components/product/Products";
import Product from "./components/product/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
