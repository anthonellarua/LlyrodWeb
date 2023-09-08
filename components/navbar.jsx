import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

//img
import Logo from "../public/assets/logo_completo.png";

const pages=[
  {name: "Industrias", link: "/industrias"},
  {name: "Sostenibilidad & ESG", link: "/sostenibilidad"},
  {name: "Trabaja con nosotros", link: "#"},
  {name: "Contacto", link: "#"},
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className={styles.navSection}>
        <nav className={styles.navContainer}>
          <Link className={styles.logoContainer} href="/">
            <Image src={Logo} className={styles.logo} alt="Logo"/>
          </Link>
          <button className={styles.menuToggle} onClick={toggleMenu}>
            ☰ {/* Icono de hamburguesa */}
          </button>
          <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
            {pages.map((page) =>{
              return (
                <li className={styles.li} key={page.name}>
                  <Link className={styles.a} href={page.link}>
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
