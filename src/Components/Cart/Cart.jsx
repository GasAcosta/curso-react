import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice, deleteProductFromCart } = useContext(CartContext);
  const total = totalQuantity();
  const totalCartPrice = totalPrice();

  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        padding: "30px",
        backgroundColor: "#FABA8A",
      }}
    >
      {cart.map((element) => {
        return (
          <div key={element.id}>
            <img src={element.img} alt="producto" style={{ width: "200px" }} />
            <h2>{element.title}</h2>
            <h3>Precio: €{element.price}</h3>
            <h3>Unidades: {element.quantity}</h3>
            <p>{element.description}</p>
            <button onClick={() => deleteProductFromCart(element.id)}>
              Eliminar producto
            </button>
          </div>
        );
      })}
      <button onClick={clearCart}>Limpiar el carrito</button>
      <h3>Cantidad total: {total}</h3>
      <h1>Precio final: €{totalCartPrice}</h1>
    </div>
  );
};

export default Cart;
