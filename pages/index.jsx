//css imports
import styles from "../styles/home.module.css"

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//img
import ImagenHome from "../public/assets/img/imagen_home.png";
import LogoHome from "../public/assets/logo_soloimagen.png";

const Home = () => {
  return (
    <>
      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image src={ImagenHome} className={styles.imagen} alt="Imagen Home"/>
          <div className={styles.texto}>
            <span className={styles.textoSecundario}>El mundo avanza en tecnología</span>
            <span className={styles.textoPrincipal}>¿Cómo la apoyamos en LLYROD?</span>
            <Link className={styles.buttonVer} href="#">Ver &gt;</Link>
          </div>
        </div>
      </section>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.cardInfo}>
            <Image src={LogoHome} className={styles.infoLogo} alt="Logo Home"/>
            <span className={styles.infoHome}>Somos una empresa que busca la generación de valor, basados en la información especializada y
              proveeduría deservicios profesionales de alta valoración.
              Promovemos el uso de nuevas tecnologías para el desarrollo de ventajas competitivas,
              para esto entrenamos continuamente profesionales con el propósito de alcanzar eficiencia, calidad y rentabilidad.</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
