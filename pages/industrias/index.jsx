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
import InteligenciaPrincipal from "../../public/assets/img/industrias/inteligencia/inteligencia_prinicipal.png";
import Inteligencia1 from "../../public/assets/img/industrias/inteligencia/inteligencia_1.png";
import Inteligencia2 from "../../public/assets/img/industrias/inteligencia/inteligencia_2.png";

//icons
import {BsGraphUpArrow} from "react-icons/bs";
import {BsRecycle} from "react-icons/bs";
import {BsSun} from "react-icons/bs";
import Accordion from "./components/accordion";

const cardsMineria=[
  {image: Mineria1, tittle:"Diagnostico socioeconómico-productivo", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Mineria2, tittle:"Fortalecimiento de capacidades", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Mineria3, tittle:"Articulación comercial", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
];

const cardsTecnologia=[
  {image: Tecnologia1, tittle:"Bootcamps formativas", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Tecnologia2, tittle:"Outsourcing especializado", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Tecnologia3, tittle:"Entrenamiento para Data Engineers jr.", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
];

const cardsBi=[
  {image: Inteligencia1, tittle:"Reportes en Power BI", texto: "Varias perspectivas de un conjunto de datos, con objetos visuales que representan hallazgos."},
  {image: Inteligencia2, tittle:"Almacenamiento en Base de Datos", texto: "Las bases de datos pueden almacenar información sobre personas, productos, pedidos u otras cosas."},
];

const Industrias = () => {
  return (
    <>
      <section className={styles.subtittleSection}>
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Minería</h2>
          <div className={styles.textIndustrias}>
            <h2 className={styles.textPrincipalIndustrias}>En el marco de la política de responsabilidad social-cooporativa,
            facilitamos soluciones destinadas a promover el desarrollo  y la sostenibilidad de las comunidades involucradas.</h2>
          </div>
        </div>
      </section>

      <section className={styles.photoSection}>
         <Image className={styles.photo} src={MineriaPrincipal} alt="Minería"/>
         <div className={styles.photoContainer}>
            <h2 className={styles.phototittleSecondary}>¿La necesidad de la minería en nuestro sector?</h2>
         </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>

            {cardsMineria.map((card, index) =>{
               return (
                  <div className={styles.card} key={index}>
                     <Image className={styles.cardImage} src={card.image} alt={card.tittle}/>
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
         <Image className={styles.photo} src={TecnologiaPrincipal} alt="Tecnología"/>
         <div className={styles.photoContainer}>
            <h2 className={styles.phototittleSecondary}>¿Conjunto de recursos o de procedimientos?</h2>
         </div>
      </section>

      <section className={styles.cardsSection}>
        <span className={styles.quehacemos}>¿Qué hacemos?</span>
        <div className={styles.cardsContainer}>
          
            {cardsTecnologia.map((card, index) =>{
               return (
                  <div className={styles.card} key={index}>
                     <Image className={styles.cardImage} src={card.image} alt={card.tittle}/>
                     <span className={styles.cardTittle}>{card.tittle}</span>
                     <span className={styles.cardTexto}>{card.texto}</span>
                  </div>
               );
            })}
        </div>
      </section>

      <section className={styles.subtittleSection}>
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Inteligencia de negocios</h2>
          <h2 className={styles.textPrincipalIndustrias}>En medio de una industria que está experimentando un cambio fundamental,
          ofrecemos ideas para ayudar a remodelar el negocio para el futuro.</h2>
        </div>
      </section>

      <section className={styles.photoSection}>
         <Image className={styles.photo} src={InteligenciaPrincipal} alt="Inteligencia Artificial"/>
         <div className={styles.photoContainer}>
            <h2 className={styles.phototittleSecondary}>¿Cómo la inteligencia de negocios puede ayudar a una empresa?</h2>
         </div>
      </section>

      <section className={styles.cardsSection}>
        <span className={styles.quehacemos}>¿Qué hacemos?</span>
        <div className={styles.cardsContainer}>
            {cardsBi.map((card, index) =>{
               return (
                  <div className={styles.card} key={index}>
                     <Image className={styles.cardImage} src={card.image} alt={card.tittle}/>
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