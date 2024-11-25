import React from "react";

const Cart = ({ cart, onRemoveFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.preco, 0);

  return (
    <div className="cart">
      <h2>Carrinho</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            
            <span>{item.nome}</span>
            <span>R$ {item.preco}</span>
            <button onClick={() => onRemoveFromCart(item.id)}>Remover</button>
          </div>
        ))
      )}
      <h3>Total: R$ {total}</h3>
    </div>
  );
};

export default Cart;