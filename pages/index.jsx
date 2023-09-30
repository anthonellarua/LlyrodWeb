//css imports
import styles from "../styles/home.module.css"
import { motion, Variants } from "framer-motion";

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//img
import ImagenHome from "../public/assets/img/imagen_home.png";
import LogoHome from "../public/assets/logo_soloimagen.png";
import GifLogoHome from "../public/assets/img/gif_llyrod.gif";

//icons
import {BsGraphUpArrow} from "react-icons/bs";
import {BsRecycle} from "react-icons/bs";
import {BsSun} from "react-icons/bs";

const cards=[
  {id: 'mineria', icon: <BsRecycle size={100}/>, tittle:"Minería", link: "#"},
  {id: 'tecnologia', icon: <BsGraphUpArrow size={100}/>, tittle:"Tecnología", link: "#"},
  {id: 'due_diligence', icon: <BsSun size={100}/>, tittle:"Due Diligence", link: "#"},
];

//framer motion
const cardVariants = {
  offscreen: {
    y: 150
  },
  onscreen: {
    y:-1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

const Home = () => {
  return (
    <>
      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <div className={styles.degradadoPortafolioTop}>
          </div>
          <Image src={ImagenHome} className={styles.imagen} alt="Imagen Home"/>
          <div className={styles.texto}>
            <span className={styles.textoSecundario}>Generamos valor a través de</span>
            <span className={styles.textoPrincipal}>Servicios Especializados</span>
            <Link className={styles.buttonVer} href="/industrias">Ver &gt;</Link>
          </div>
        </div>
      </section>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.cardInfo}>
            <Image src={GifLogoHome} className={styles.infoLogo} alt="Logo Home"/>
            <span className={styles.infoHome}>Integramos el desarrollo de estudios de complejidad
             técnica con la adopción de tecnologías que facilitan la correcta toma de decisiones 
             para el ámbito productivo, social y medioambiental.</span>
          </div>
        </div>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          {cards.map((card) =>{
            return (
              <motion.div className={styles.linkCard}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }} key={card.tittle}
              >
                <Link href={`/industrias#${card.id}`} >
                  <motion.div  variants={cardVariants}>
                    <div className={styles.card} key={card.tittle}>
                      <span className={styles.cardIcon}> {card.icon} </span>
                      <span className={styles.cardTittle}> {card.tittle} </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
