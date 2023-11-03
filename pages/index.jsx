//css imports
import styles from "../styles/home.module.css"
import { motion, Variants } from "framer-motion";

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect,useRef } from 'react';
import { useRouter } from "next/router";

//img
import ImagenHome from "../public/assets/img/imagen_home.png";
import GraficoHome from "../public/assets/img/grafico_home.png";
import LogoHome from "../public/assets/logo_soloimagen.png";
import GifLogoHome from "../public/assets/img/gif_llyrod.gif";
import MineriaImagen from "../public/assets/img/home/mineria_home.png";
import TecnologiaImagen from "../public/assets/img/home/incubadora_home.png";
import InteligenciaImagen from "../public/assets/img/home/inteligencia_home.png";

//icons
import {BsGraphUpArrow} from "react-icons/bs";
import {BsRecycle} from "react-icons/bs";
import {BsSun} from "react-icons/bs";

const cards=[
  {id: 'mineria', imagen: MineriaImagen,icon: <BsRecycle size={24}/>, tittle:"Minería & Gestión Social", link: "#"},
  {id: 'tecnologia', imagen: InteligenciaImagen,icon: <BsGraphUpArrow size={24}/>, tittle:"Inteligencia de negocios", link: "#"},
  {id: 'due_diligence', imagen: TecnologiaImagen,icon: <BsSun size={24}/>, tittle:"Incubadora de desarrollo", link: "#"},
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
      bounce: 0.5,
      duration: 2
    }
  }
};

const Home = () => {

  const videoRef = useRef(null);
  const router = useRouter();
  const buttonRef = useRef(null);


  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Autoplay failed:', error);
      });
    }
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  const handleCardClick = (cardId) => {
    router.push(`/industrias#${cardId}`);
  };

  return (
    <>
      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <div className={styles.degradadoPortafolioTop}>
          </div>

          { /* <Image src={ImagenHome} className={styles.imagen} alt="Imagen Home"/> */}
          <video ref={videoRef} src={require('./video_home.mp4')} className={styles.imagen} muted loop autoPlay/>
          {/*<button ref={buttonRef} onClick={handlePlayClick} >Play Video</button>*/}

          <div className={styles.textandGraph}>
            <div className={styles.texto}>
              <span className={styles.textoSecundario}>Generamos valor a través de</span>
              <span className={styles.textoPrincipal}>Servicios Especializados</span>
              <Link className={styles.buttonVer} href="/industrias">Ver &gt;</Link>
            </div>
            <div className={styles.grafico}>
              <Image src={GraficoHome} className={styles.graficohome} alt="Grafico Home"/>
            </div>
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
                <div onClick={() => handleCardClick(card.id)}>
                  <motion.div  variants={cardVariants}>
                    <div className={styles.imageContainerCards}>
                      <div className={styles.degradadoPortafolioTopCards}>
                      </div>
                      <Image src={card.imagen} className={styles.imagenCard} alt="Imagen Home"/>
                      <div className={styles.textoCard}>
                          {/*<span className={styles.cardIcon}> {card.icon} </span>*/}
                          <span className={styles.cardTittle}> {card.tittle} </span>
                          <Link href={`/industrias#${card.id}`}
                            className={styles.buttonAccordion}
                            type="button"
                          >
                            Leer más
                          </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
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

    </>
  );
};

export default Home;
