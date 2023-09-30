//css imports
import styles from "../../styles/sostenibilidad.module.css"

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//img
import ImagenSostenibilidad from "../../public/assets/img/sostenibilidad/imagen_sostenibilidad.jpg";
import Sostenibilidad1 from "../../public/assets/img/sostenibilidad/sostenibilidad_1.jpg";
import Sostenibilidad2 from "../../public/assets/img/sostenibilidad/sostenibilidad_2.jpg";
import Sostenibilidad3 from "../../public/assets/img/sostenibilidad/sostenibilidad_3.jpg";
import LogoHome from "../../public/assets/logo_soloimagen.png";

//icons
import {BsGraphUpArrow} from "react-icons/bs";
import {BsRecycle} from "react-icons/bs";
import {BsSun} from "react-icons/bs";

const cards=[
  {image: Sostenibilidad1, number: '01', tittle:"Responsabilidad Social", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Sostenibilidad2, number: '02', tittle:"Fondos de cooperación internacional", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Sostenibilidad3, number: '03', tittle:"Organizaciones Competitivas, Responsables y Sostenibles", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
];

const Sostenibilidad = () => {
  return (
    <>
      <section className={styles.tittleSection}>
        <div className={styles.tittleContainer}>
          <h2 className={styles.tittlePrincipal}>Sostenibilidad &</h2>
          <h2 className={styles.tittleSecondary}>ESG (Enviromental, Social, Governance)</h2>
        </div>
      </section>
      <section className={styles.photoSection}>
        <div className={styles.degradadoPortafolioTop}>
        </div>
         <Image className={styles.photoSostenibilidad} src={ImagenSostenibilidad} alt="Sostenibilidad"/>
         <div className={styles.photoContainer}>
            <h2 className={styles.phototittleSecondary}>Las organizaciones dan cada vez más prioridad
            a sus responsabilidades en materia de Sostenibilidad & ESG</h2>
         </div>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
            {cards.map((card, index) =>{
               return (
                  <div className={styles.card} key={index}>
                     <Image className={styles.cardImage} src={card.image} alt={card.tittle}/>
                     <h2 className={styles.cardNumber}>{card.number}</h2>
                     <span className={styles.cardTittle}>{card.tittle}</span>
                     <span className={styles.cardTexto}>{card.texto}</span>
                  </div>
               );
            })}
        </div>
      </section>
    </>
  );
};

export default Sostenibilidad;