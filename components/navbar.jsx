import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>Logo</div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰ {/* Icono de hamburguesa */}
        </button>
        <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              Nosotros
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              Quiénes somos
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
