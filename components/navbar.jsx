import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Head from "next/head";
import { useRouter } from 'next/router';

//img
import Logo from "../public/assets/logo_completo.png";

const pages = [
  { name: "Industrias", link: "/industrias" },
  { name: "Sostenibilidad & ESG", link: "/sostenibilidad" },
  { name: "Trabaja con nosotros", link: "/trabaja_con_nosotros" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Cierra el menú estableciendo menuOpen en falso.
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //asigna el título
  const router = useRouter();
  let pageTitle = "Llyrod | Home";
  if (router.pathname === "/industrias") {
    pageTitle = "Llyrod | Industrias";
  } else if (router.pathname === "/sostenibilidad") {
    pageTitle = "Llyrod | Sostenibilidad & ESG";
  } else if (router.pathname === "/trabaja_con_nosotros") {
    pageTitle = "Llyrod | Trabaja con nosotros";
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`${styles.navSection} ${isFixed ? styles.fixedNavbar : ""}`}>
        <nav className={styles.navContainer}>
          <Link className={styles.logoContainer} href="/">
            <Image src={Logo} className={styles.logo} alt="Logo" />
          </Link>
          <button className={styles.menuToggle} onClick={toggleMenu}>
            ☰ {/* Icono de hamburguesa */}
          </button>
          <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
            {pages.map((page) => {
              return (
                <li className={styles.li} key={page.name}>
                  <Link className={styles.a} href={page.link} onClick={closeMenu}>
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
