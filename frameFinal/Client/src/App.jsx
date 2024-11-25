import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    showNotification();
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const showNotification = () => {
    setNotification(true); // Exibe o pop-up
    setTimeout(() => setNotification(false), 1000); // Oculta após 3 segundos
  };

  return (
    <Router>
      <Header />
      <div className="app">
        {notification && <div className="notification">Item adicionado ao carrinho!</div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductList onAddToCart={handleAddToCart} />} />
          <Route path="/carrinho" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
