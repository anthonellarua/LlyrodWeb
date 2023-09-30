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
  {image: Inteligencia2, tittle:"Almacenamiento en Base de Datos", texto: "Las bases de datos pueden almacenar información sobre personas, productos, pedidos u otras cosas."},
];

const Industrias = () => {

  return (
    <>
      <section className={styles.subtittleSection} id="mineria">
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Minería</h2>
          <div className={styles.textIndustrias}>
            <h2 className={styles.textPrincipalIndustrias}>En el marco de la política de responsabilidad social-corporativa, facilitamos soluciones
             destinadas a promover el desarrollo y sostenibilidad de las comunidades involucradas.</h2>
            <Accordion title={"Grupo Llyrod cuenta con una extensa experiencia en la formulación, ejecución y supervisión de proyectos de infraestructura, educación, salud así como cadenas productivas, fortalecimiento de capacidades entre otros. Nuestra participación activa en la industria de la minería se basa en principios sólidos de sostenibilidad y ética empresarial. Creemos firmemente que, al extraer y aprovechar los recursos naturales de manera responsable, podemos contribuir al bienestar de las comunidades locales y al cuidado del entorno en el que operamos."} content={"Grupo llyrod cuenta con una extensa experiencia en la formulación, ejecución y supervisión de proyectos de infraestructura, educación, salud así como cadenas productivas, fortalecimiento de capacidades entre otros. "}/>
          </div>
        </div>
      </section>

      <section className={styles.photoSection}>
          <div className={styles.degradadoPortafolioTop}>
          </div>
          <div className={styles.photoContainer}>
            <h2 className={styles.phototittleSecondary}>Las empresas mineras deben adoptar un enfoque holístico</h2>
          </div>
          <Image className={styles.photo} src={MineriaPrincipal} alt="Minería"/>
      </section>

      <section className={styles.cardsSection}>
        <span className={styles.quehacemos}>¿Qué hacemos?</span>
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

      <section className={styles.subtittleSection} id="tecnologia">
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Tecnología</h2>
          <div className={styles.textIndustrias}>
            <h2 className={styles.textPrincipalIndustrias}>Adoptamos la tecnología en el negocio que 
            facilita la correcta toma de decisiones para el ámbito productivo, social y medioambiental. </h2>
            <Accordion title={"Grupo llyrod cuenta con una extensa experiencia en la formulación, ejecución y supervisión de proyectos de infraestructura, educación, salud así como cadenas productivas, fortalecimiento de capacidades entre otros."}
            content={"Grupo llyrod cuenta con una extensa experiencia en la formulación, ejecución y supervisión de proyectos de infraestructura, educación, salud así como cadenas productivas, fortalecimiento de capacidades entre otros."}/>
          </div>
        </div>
      </section>

      <section className={styles.photoSection}>
        <div className={styles.degradadoPortafolioTop}>
        </div>
        <Image className={styles.photo} src={TecnologiaPrincipal} alt="Tecnología"/>
        <div className={styles.photoContainer}>
          <h2 className={styles.phototittleSecondary}>Las empresas que adoptan la tecnología son las que llevan la delantera</h2>
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

      <section className={styles.subtittleSection} id="due_diligence">
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Inteligencia de negocios</h2>
          <div className={styles.textIndustrias}>
            <h2 className={styles.textPrincipalIndustrias}>En medio de una industria que está
            experimentando cambios drásticos, ofrecemos ideas para transformar negocios del futuro.</h2>
            <Accordion title={"Grupo llyrod cuenta con una extensa experiencia en la formulación, ejecución y supervisión de proyectos de infraestructura, educación, salud así como cadenas productivas, fortalecimiento de capacidades entre otros."} content={"Grupo llyrod cuenta con una extensa experiencia en la formulación, ejecución y supervisión de proyectos de infraestructura, educación, salud así como cadenas productivas, fortalecimiento de capacidades entre otros."}/>
          </div>
        </div>
      </section>

      <section className={styles.photoSection}>
        <div className={styles.degradadoPortafolioTop}>
        </div>
        <Image className={styles.photo} src={InteligenciaPrincipal} alt="Inteligencia Artificial"/>
        <div className={styles.photoContainer}>
          <h2 className={styles.phototittleSecondary}>La inteligencia de negocios acelera la innovación y la toma de decisiones clave</h2>
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