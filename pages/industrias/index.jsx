//css imports
import styles from "../../styles/industrias.module.css"

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//img
import MineriaPrincipal from "../../public/assets/img/industrias/mineria/mineria_principal.png";
import Mineria1 from "../../public/assets/img/industrias/mineria/mineria_1.png";
import Mineria2 from "../../public/assets/img/industrias/mineria/mineria_2.png";
import Mineria3 from "../../public/assets/img/industrias/mineria/mineria_3.png";
import TecnologiaPrincipal from "../../public/assets/img/industrias/tecnologia/tecnologia_principal.png";
import Tecnologia1 from "../../public/assets/img/industrias/tecnologia/tecnologia_1.png";
import Tecnologia2 from "../../public/assets/img/industrias/tecnologia/tecnologia_2.png";
import Tecnologia3 from "../../public/assets/img/industrias/tecnologia/tecnologia_3.png";

//icons
import {BsGraphUpArrow} from "react-icons/bs";
import {BsRecycle} from "react-icons/bs";
import {BsSun} from "react-icons/bs";

const cardsMineria=[
  {image: Mineria1, tittle:"Capacitación ganadera", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Mineria2, tittle:"Promoción de productores ganaderos", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Mineria3, tittle:"Promoción de productores ganaderos", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
];

const cardsTecnologia=[
  {image: Tecnologia1, tittle:"Bootcamps gratuitas", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Tecnologia2, tittle:"Data Sourcing", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Tecnologia3, tittle:"Entrenamiento para Engeniers Juniors", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
];

const cardsBi=[
  {image: Mineria1, tittle:"Capacitación ganadera", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Mineria2, tittle:"Promoción de productores ganaderos", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
];

const Industrias = () => {
  return (
    <>
      <section className={styles.tittleSection}>
        <div className={styles.tittleContainer}>
          <h2 className={styles.tittlePrincipal}>Industrias &</h2>
          <h2 className={styles.tittleSecondary}>ESG (Enviromental, Social, Governance)</h2>
        </div>
      </section>

      <section className={styles.subtittleSection}>
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Minería</h2>
          <h2 className={styles.textPrincipalIndustrias}>En medio de una industria que está experimentando un cambio fundamental, 
          ofrecemos ideas para ayudar a remodelar el negocio para el futuro.</h2>
        </div>
      </section>

      <section className={styles.photoSection}>
         <Image className={styles.photo} src={MineriaPrincipal}/>
         <div className={styles.photoContainer}>
            <span className={styles.phototittlePrincipal}>Foto tomada el 30/08/2023</span>
            <h2 className={styles.phototittleSecondary}>¿La necesidad de la minería en nuestro sector?</h2>
         </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
            {cardsMineria.map((card) =>{
               return (
                  <div className={styles.card}>
                     <Image className={styles.cardImage} src={card.image}/>
                     <span className={styles.cardTittle}>{card.tittle}</span>
                     <span className={styles.cardTexto}>{card.texto}</span>
                  </div>
               );
            })}
        </div>
      </section>

      <section className={styles.subtittleSection}>
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Tecnología</h2>
          <h2 className={styles.textPrincipalIndustrias}>La tecnología es la suma de técnicas, habilidades, métodos y procesos
          utilizados en la producción de bienes o servicios o en el logro de objetivos.</h2>
        </div>
      </section>

      <section className={styles.photoSection}>
         <Image className={styles.photo} src={TecnologiaPrincipal}/>
         <div className={styles.photoContainer}>
            <span className={styles.phototittlePrincipal}>Foto tomada el 30/08/2023</span>
            <h2 className={styles.phototittleSecondary}>¿Conjunto de recursos o de procedimientos?</h2>
         </div>
      </section>

      <section className={styles.cardsSection}>
        <span>¿Qué hacemos?</span>
        <div className={styles.cardsContainer}>
            {cardsTecnologia.map((card) =>{
               return (
                  <div className={styles.card}>
                     <Image className={styles.cardImage} src={card.image}/>
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

export default Industrias;