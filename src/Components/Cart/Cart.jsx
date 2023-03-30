import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice, deleteProductFromCart } =
    useContext(CartContext);
  const total = totalQuantity();
  const [formCheckout, setFormCheckout] = useState(false);
  const [orderId, setOrderId] = useState(null);

  if (orderId) {
    return (
      <div>
        <h2>Gracias por su compra</h2>
        <h4>El ID de su compra es: {orderId}</h4>
        <Link
          to="/"
          sx={{
            textTransform: "none",
            color: "#F15A24",
            fontWeight: "bold",
          }}
        >
          Seguir comprando
        </Link>
      </div>
    );
  }

  if (cart.length > 0) {
    return (
      <div>
        {!formCheckout ? (
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              backgroundColor: "#FABA8A",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              {cart.map((element) => {
                return (
                  <Card
                    sx={{
                      width: "100%",
                      margin: "8px",
                      alignItems: "center",
                    }}
                    key={element.id}
                  >
                    <CardMedia
                      component="img"
                      alt={element.title}
                      height="140"
                      image={element.img}
                    />
                    <CardContent
                      sx={{
                        margin: "8px",
                      }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {element.title}
                      </Typography>
                      <Typography variant="p" sx={{ margin: "8px" }}>
                        Precio: €{element.price}
                      </Typography>
                      <Typography variant="p">
                        Unidades: {element.quantity}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => deleteProductFromCart(element.id)}
                        size="small"
                        startIcon={<DeleteIcon />}
                        sx={{
                          textTransform: "none",
                          color: "#F15A24",
                          fontWeight: "bold",
                        }}
                      >
                        Eliminar producto
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </div>
            <div style={{ alignItems: "center" }}>
              <h1>Precio final: €{totalPrice()}</h1>
              <h5>Cantidad total: {total}</h5>
              <Button
                onClick={clearCart}
                startIcon={<DeleteIcon />}
                sx={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                }}
              >
                Limpiar el carrito
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                }}
                onClick={() => setFormCheckout(true)}
              >
                Comprar
              </Button>
            </div>
          </div>
        ) : (
          <Form
            cart={cart}
            totalPrice={totalPrice}
            setOrderId={setOrderId}
            clearCart={clearCart}
          />
        )}
      </div>
    );
  } else {
    return (
      <div style={{alignItems: "center", backgroundColor: "#FABA8A", textAlign: "center", padding: "8px"}}>
        <img
          src="https://res.cloudinary.com/ddxobed7l/image/upload/v1680200941/undraw_empty_cart_co35_n08ovg.svg"
          alt="empty-cart"
          width="30%"
        />
        <h1>¡Su carrito está vacío!</h1>
      </div>
    );
  }
};

export default Cart;
