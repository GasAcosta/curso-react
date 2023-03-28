import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemCount = ({ onAdd, stock, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button
        onClick={restar}
        sx={{
          textTransform: "none",
          color: "#F15A24",
          fontWeight: "bold",
        }}
      >
        -
      </Button>
      <Typography style={{ color: "#F15A24", fontWeight: "bold" }}>
        {contador}
      </Typography>
      <Button
        onClick={sumar}
        sx={{
          textTransform: "none",
          color: "#F15A24",
          fontWeight: "bold",
        }}
      >
        +
      </Button>
      <Button
        onClick={() => onAdd(contador)}
        sx={{
          textTransform: "none",
          color: "#F15A24",
          fontWeight: "bold",
        }}
      >
        Añadir al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
