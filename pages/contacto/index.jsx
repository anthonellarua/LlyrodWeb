import Head from "next/head";
import Maps from "./components/maps";
import Build from '../../components/build'
import styles from "../../styles/contacto.module.css";
import Agendar from "./components/agendar";

const Contacto = () => {
  return (
    <>
      <Head>
        <title>Contacto | Pierre Zevallos</title>
        <meta
          name="description"
          content="Fotografo profesional - Nos encargamos de Capturar los mejores momentos de tu vida y que vuelvas a revivir el momento"
        />
        <meta property="og:image" content="/pierrewhite.jpg" />
      </Head>

      <section className={styles.mapsSection}>
        <div className={styles.mapsContainer}>
          <h2 className={styles.mapsTextContacto}>Contacto</h2>
          <Maps/>
        </div>
      </section>
      
      <section className={styles.agendarSection}>
        <div className={styles.agendarContainer}>
          
          <Agendar/>
        </div>
      </section>
    </>
  );
};

export default Contacto;
