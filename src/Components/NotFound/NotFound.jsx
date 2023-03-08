import { MdError } from "react-icons/md";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", alignItems: "center", padding: "30px", backgroundColor: "#FABA8A" }}>
      <MdError size={100} />
      <h1>Oops! Esta página del sitio no existe.</h1>
      <h3>Volvé al inicio para seguir navegando.</h3>
    </div>
  );
};

export default NotFound;
