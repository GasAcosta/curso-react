import { useState, useEffect } from "react";
import { Button } from "@mui/material";

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < 5) {
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
      <span style={{ color: "#F15A24", fontWeight: "bold" }}>{contador}</span>
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
