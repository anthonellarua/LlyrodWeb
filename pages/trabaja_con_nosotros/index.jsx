//css imports
import styles from "../../styles/trabajaconnosotros.module.css"

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState , useRef} from "react";

//img
import ImagenSostenibilidad from "../../public/assets/img/sostenibilidad/imagen_sostenibilidad.jpg";
import Sostenibilidad1 from "../../public/assets/img/sostenibilidad/sostenibilidad_1.jpg";
import Sostenibilidad2 from "../../public/assets/img/sostenibilidad/sostenibilidad_2.jpg";
import Sostenibilidad3 from "../../public/assets/img/sostenibilidad/sostenibilidad_3.jpg";
import LogoHome from "../../public/assets/logo_soloimagen.png";

//icons
import {BsBoxArrowUp} from "react-icons/bs";


const Sostenibilidad = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFileName(file.name);
  };

  return (
    <>
      <section className={styles.tittleSection}>
        <div className={styles.tittleContainer}>
          <h2 className={styles.tittlePrincipal}>¿Listo para</h2>
          <h2 className={styles.tittleSecondary}>trabajar con nosotros?</h2>
        </div>
      </section>
      <section>
        <form name="contact" method="POST" className={styles.formSection} data-netlify="true">
          <div className={styles.inputGroup}>
            <input className={styles.nombresInput} type="text" placeholder="Nombres" name="nombres"/>
            <input className={styles.apellidosInput} type="text" placeholder="Apellidos" name="apellidos"/>
          </div>
          <input className={styles.emailInput} type="email" placeholder="E-mail" name="email"/>
          <div className={styles.customFileUpload}>
            <span className={styles.fileSection}>{selectedFileName}</span>
            <button onClick={handleButtonClick} className={styles.buttonUpload}><BsBoxArrowUp/></button>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </div>
          <button type="submit" className={styles.buttonEnviar}>Enviar</button>
        </form>
      </section>
    </>
  );
};

export default Sostenibilidad;