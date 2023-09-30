//css imports
import styles from "../../styles/trabajaconnosotros.module.css"

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState , useRef} from "react";
import emailjs from "emailjs-com";

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
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
  });

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFileName(file.name);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const fileInput = fileInputRef.current;
    const file = fileInput.files[0];

    emailjs.init("FdkHvCFOQUrFC_P99");

    const emailData = {
      ...formData,
      archivo: {
        name: selectedFileName,
        data: file,
        type:"application/pdf",
      },
    };

      emailjs
      .send("service_gtxbbnt", "template_u4yixzi", emailData, {
        attachments: { archivo: emailData.archivo },
      })
      .then((response) => {
        console.log("Correo electrónico enviado con éxito:", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
        <form method="POST" className={styles.formSection} onSubmit={handleFormSubmit}>
          <div className={styles.inputGroup}>
            <input className={styles.nombresInput} type="text" placeholder="Nombres" name="nombres" value={formData.nombres} onChange={handleInputChange}
              required/>
            <input className={styles.apellidosInput} type="text" placeholder="Apellidos" name="apellidos" value={formData.apellidos}
              onChange={handleInputChange}
              required/>
          </div>
          <input className={styles.emailInput} type="email" placeholder="E-mail" name="email" value={formData.email}
            onChange={handleInputChange}
            required/>
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