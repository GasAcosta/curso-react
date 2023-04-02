import TextField from "@mui/material/TextField";
import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Button } from "@mui/material";

const Form = ({ cart, totalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let order = {
      buyer: userData,
      items: cart,
      total: totalPrice(),
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => {
      setOrderId(res.id);
      clearCart();
    });
    cart.map((elemento) => {
      let refDoc = doc(db, "products", elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
      return elemento
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: "#FABA8A",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TextField
          sx={{ margin: "8px" }}
          id="standard-basic"
          label="Nombre y Apellido"
          variant="standard"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <TextField
          sx={{ margin: "8px" }}
          id="standard-basic"
          label="Correo Electrónico"
          variant="standard"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <TextField
          sx={{ margin: "8px" }}
          id="standard-basic"
          label="Teléfono"
          variant="standard"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <TextField
          sx={{ margin: "8px" }}
          id="standard-basic"
          label="Método de Pago"
          variant="standard"
          value={userData.payment}
          onChange={(e) =>
            setUserData({ ...userData, payment: e.target.value })
          }
        />
        <Button
          variant="text"
          sx={{
            padding: "8px",
            textTransform: "none",
            color: "#F15A24",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          type="submit"
        >
          Comprar
        </Button>
      </form>
      {/* <div
        style={{
          padding: "8px",
          textAlign: "center",
          backgroundColor: "#FABA8A",
        }}
      >
        <Button
          variant="text"
          sx={{
            padding: "8px",
            textTransform: "none",
            color: "#F15A24",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Volver al carrito
        </Button>
      </div> */}
    </div>
  );
};

export default Form;
