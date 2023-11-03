//css imports
import styles from "../../styles/industrias.module.css"

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//img
import MineriaPrincipal from "../../public/assets/img/industrias/mineria/mineria_principal.png";
import MineriaPrincipalGrafico from "../../public/assets/img/industrias/mineria/mineria_principal_grafico.png";
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
import Inteligencia3 from "../../public/assets/img/industrias/inteligencia/inteligencia_3.png";

//icons
import {BsGraphUpArrow} from "react-icons/bs";
import {BsRecycle} from "react-icons/bs";
import {BsSun} from "react-icons/bs";
import Accordion from "./components/accordion"; 

const cardsMineria=[
  {image: Mineria1, tittle:"Diagnóstico socioeconómico-productivo", texto: "Nuestro compromiso es entender a fondo la dinámica de las comunidades locales y su entorno, para asegurarnos de que nuestras actividades generen un impacto positivo en su bienestar."},
  {image: Mineria2, tittle:"Fortalecimiento de capacidades", texto: "Nuestra inversión en programas de formación y desarrollo de habilidades tiene como objetivo mejorar la calidad de vida y las oportunidades de las personas que rodean nuestras operaciones."},
  {image: Mineria3, tittle:"Articulación comercial", texto: "Trabajamos en estrecha colaboración con empresas y emprendedores de la región para fomentar alianzas que impulsen el crecimiento sostenible y la prosperidad compartida."},
];

const cardsTecnologia=[
  {image: Tecnologia1, tittle:"Programas Intensivos de Aprendizaje", texto: "Experiencia de aprendizaje inmersiva y de alto impacto, que proporciona las habilidades y conceptos esenciales en un corto período e impulsa el desarrollo personal y profesional."},
  {image: Tecnologia3, tittle:"Entrenamiento para Data Engineers jr.", texto: "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas."},
  {image: Tecnologia2, tittle:"Outsourcing especializado", texto: "Confía en Grupo Llyrod para obtener soluciones de outsourcing especializado. Nuestro enfoque se centra en brindarte servicios personalizados que optimizan tus operaciones y te permiten concentrarte en lo que realmente importa."},
];

const cardsBi=[
  {image: Inteligencia1, tittle:"Análisis Predictivo", texto: "Descubriendo oportunidades ocultas y anticipando cambios en la industria a través de análisis avanzados que ayudarán a tomar desiciones."},
  {image: Inteligencia2, tittle:"Desarrollo de Soluciones", texto: "Desarrollando soluciones informadas a medida para abordar los desafíos únicos de nuestros clientes y fomentar su éxito."},
  {image: Inteligencia3, tittle:"Cloud Computing", texto: "Utilizando tecnologías de vanguardia para impulsar la evolución de los negocios hacia un futuro más prometedor."},
];

const Industrias = () => {

  return (
    <>
      <section className={styles.subtittleSection} id="mineria">
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Minería & <br></br>Gestión Social</h2>
          <div className={styles.textIndustrias}>
            <h2 className={styles.textPrincipalIndustrias}>En el marco de la política de responsabilidad social-corporativa, facilitamos soluciones 
            destinadas a promover el desarrollo y sostenibilidad de las comunidades involucradas en minería, gestión social y relaciones comunitarias.</h2>
            <Accordion title={"Grupo Llyrod cuenta con una extensa experiencia en la formulación, ejecución y supervisión de proyectos de infraestructura, educación, salud, así como en el desarrollo y fomento de cadenas productivas, articulación comercial y formación de proveedores locales, entre otros. Nuestra participación activa en la industria de la minería se basa en principios sólidos de sostenibilidad y ética empresarial. Creemos firmemente que, al extraer y aprovechar los recursos naturales de manera responsable, es posible contribuir con el bienestar de las comunidades locales y con el cuidado del entorno en que se opera."} content={"Además, nos comprometemos a respetar los más altos estándares éticos en todas nuestras operaciones. La integridad y la transparencia son fundamentales para nuestra cultura empresarial, y trabajamos incansablemente para prevenir la corrupción y promover la ética en todas nuestras relaciones comerciales."}/>
          </div>
        </div>
      </section>

      <section className={styles.photoSection}>
          <div className={styles.degradadoPortafolioTop}>
          </div>
          <div className={styles.photoContainer}>
            <h2 className={styles.phototittleSecondary}>Promovemos el desarrollo sostenible y ética en minería.</h2>
          </div>

          {/*<div className={styles.graficoContainer}>
            <Image className={styles.photografico} src={MineriaPrincipalGrafico} alt="Minería"/>
  </div> */}
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

      <section className={styles.subtittleSection} id="due_diligence">
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Inteligencia de <br></br>negocios</h2> 
          <div className={styles.textIndustrias}>
            <h2 className={styles.textPrincipalIndustrias}>En medio de una industria que está
            experimentando cambios drásticos, ofrecemos ideas para transformar negocios del futuro.</h2>
            <Accordion title={"En un entorno empresarial en constante evolución y transformación, en Grupo Llyrod nos destacamos por nuestra capacidad para anticipar y liderar los cambios en la industria. Estamos comprometidos a ofrecer ideas innovadoras y soluciones estratégicas que ayuden a las empresas a adaptarse y prosperar en el panorama empresarial del futuro. Nuestra visión es ser pioneros en la identificación de tendencias emergentes y en la aplicación de tecnologías disruptivas para impulsar la transformación empresarial. "}
            content={"Trabajamos en estrecha colaboración con nuestros clientes para comprender sus desafíos y oportunidades específicos, y luego desarrollamos estrategias personalizadas que les permitan destacarse en sus respectivos sectores."}/>
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


      <section className={styles.subtittleSection} id="tecnologia">
        <div className={styles.subtittleContainer}>
          <h2 className={styles.tittlePrincipalIndustrias}>Incubadora <br></br>de desarrollo</h2>
          <div className={styles.textIndustrias}>
            <h2 className={styles.textPrincipalIndustrias}>Un espacio dedicado a fomentar la creatividad, la colaboración y el progreso continuo. Nuestra visión es ser un catalizador para la transformación, impulsando soluciones audaces y nuevas perspectivas. </h2>
            <Accordion title={"Grupo Llyrod es un punto de encuentro para mentes inquisitivas y apasionadas. Aquí, nuestros equipos y colaboradores exploran ideas vanguardistas, desarrollan soluciones disruptivas y forjan alianzas estratégicas para el futuro. Fomentamos la experimentación y el aprendizaje constante, brindando un entorno que nutre la innovación y el crecimiento."}
            content={"Utilizamos sistemas de gestión de datos y análisis avanzados para recopilar información valiosa sobre el rendimiento de nuestras operaciones, lo que nos permite tomar decisiones más acertadas y basadas en datos en tiempo real."}/>
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

    </>
  );
};

export default Industrias;