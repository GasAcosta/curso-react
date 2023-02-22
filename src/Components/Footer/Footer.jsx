import styles from "./Footer.module.css";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className={styles.divFooter}>
      <div className={styles.marcaFooter}>
        <h3>LABURAN BANDA.</h3>
        <p>Todo gira alrededor de tu set-up</p>
      </div>
      <ul className={styles.listaFooter}>
        <a className={styles.menuFooter} href="#">
          Sobre LB
        </a>
        <a className={styles.menuFooter} href="#">
          Contacto
        </a>
        <a className={styles.menuFooter} href="#">
          Como comprar
        </a>
        <a className={styles.menuFooter} href="#">
          FAQ's
        </a>
      </ul>
      <div className={styles.rrssFooter}>
        <a href="#">
          <TiSocialFacebook color="#f15a24" size={25} />
        </a>
        <a href="#">
          <TiSocialInstagram color="#f15a24" size={25} />
        </a>
        <a href="#">
          <TiSocialTwitter color="#f15a24" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
