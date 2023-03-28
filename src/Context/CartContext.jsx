import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const agregarCarrito = (producto) => {
    let existe = isInCart(producto.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
  };

  const deleteProductFromCart = (id) => {
    const newCart = cart.filter((elemento) => elemento.id !== id);
    setCart(newCart);
  };

  const getProductQuantity = (id) => {
    const findProduct = cart.find((elemento) => elemento.id === id);
    return findProduct?.quantity
  };

  let data = {
    cart,
    agregarCarrito,
    clearCart,
    totalQuantity,
    totalPrice,
    deleteProductFromCart,
    getProductQuantity
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
