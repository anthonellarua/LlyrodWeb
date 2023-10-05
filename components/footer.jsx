import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";

//icons
import {CiMail} from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <span className={styles.contacto}>Contáctanos</span>
        <span className={styles.info}>¿Te interesó este contenido? Contáctanos para más información.</span>
        <Link href="https://www.linkedin.com/company/grupo-llyrod/" className={styles.linkicon}><CiMail className={styles.icon}/></Link>
      </footer>
    </>
  );
};

export default Footer;
