import { useState } from "react";

//css imports
import styles from "../../../styles/industrias.module.css"

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
      className={styles.textSecIndustrias}
    >
      <button
        style={{

          textAlign: "left",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer"
        }}
        
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
