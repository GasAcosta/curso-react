import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.divNavbar}>
      <div className={styles.logoNavbar}>
        <img
          src="https://res.cloudinary.com/ddxobed7l/image/upload/v1676982256/curso-react/LaburanBandaLogo_pvuph9.png"
          alt="logo-laburan-banda"
        />
      </div>
      <ul className={styles.listaNavbar}>
        <a className={styles.menuNavbar} href="#">
          Inicio
        </a>
        <a className={styles.menuNavbar} href="#">
          Ofertas
        </a>
        <a className={styles.menuNavbar} href="#">
          Gaming
        </a>
        <a className={styles.menuNavbar} href="#">
          Oficina
        </a>
        <a className={styles.menuNavbar} href="#">
          Ocio
        </a>
      </ul>
      <div className={styles.carritoNavbar}>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
