import React, { useState, useEffect } from "react";
import "./ProductList.css";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  // Buscar dados do JSON ao montar o componente
  useEffect(() => {
    fetch("/produtos.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.tenis))
      .catch((error) => console.error("Erro ao carregar os produtos:", error));
  }, []);

  return (
    <div className="product-list">
      <h2>SNEAKERS</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imagem} alt={product.nome} className="product-image" />
            <h3>{product.nome}</h3>
            <p>R$ {product.preco.toFixed(2)}</p>
            <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
