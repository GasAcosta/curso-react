import TextField from "@mui/material/TextField";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Form = (cart, totalPrice, setOrderId) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let orderData = {
      buyer: userData,
      items: cart,
      total: totalPrice,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, orderData)
      .then((res) => {setOrderId(res.id)})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button
          style={{
            textTransform: "none",
            color: "#F15A24",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          type="submit"
        >
          Comprar
        </button>
      </form>
      <button
        style={{
          textTransform: "none",
          color: "#F15A24",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Volver al carrito
      </button>
    </div>
  );
};

export default Form;
