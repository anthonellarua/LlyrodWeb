import { useState } from "react";

//css imports
import styles from "../../../styles/industrias.module.css"

//icons
import {BsChevronDown} from "react-icons/bs";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div className={`${styles.accordionContent} ${isShowing ? styles.activeAccordion:''}`}>
        <p className={styles.textPrincipalAccordion}>{props.title}</p>
      </div>

      <div
        style={{ display: isShowing ? "block" : "none"}}
        className={styles.textSecAccordion}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />

      <button
        className={styles.buttonAccordion}
        onClick={toggle}
        type="button"
      >
        {isShowing ? "Leer menos" : "Leer más"}
      </button>
    </div>
  );
}
