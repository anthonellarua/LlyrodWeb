//css imports
import styles from "../styles/home.module.css"

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//img
import ImagenHome from "../public/assets/img/imagen_home.png";
import LogoHome from "../public/assets/logo_soloimagen.png";

//icons
import {BsGraphUpArrow} from "react-icons/bs";
import {BsRecycle} from "react-icons/bs";
import {BsSun} from "react-icons/bs";

const cards=[
  {icon: <BsRecycle size={100}/>, tittle:"Minería", link: "#"},
  {icon: <BsGraphUpArrow size={100}/>, tittle:"Tecnología", link: "#"},
  {icon: <BsSun size={100}/>, tittle:"Due Diligence", link: "#"},
];

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
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          {cards.map((card) =>{
            return (
              <div className={styles.card} key={card.tittle}>
                <span className={styles.cardIcon}> {card.icon} </span>
                <span className={styles.cardTittle}> {card.tittle} </span>
                <Link className={styles.cardButtonVer} href={card.link}>Ver &gt;</Link>
              </div>
              );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
