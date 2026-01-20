

import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`${styles.footer} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.social}>
        <a
          href="https://github.com/ErmiasZ12"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ermiyas-werdofa-9b71b5320/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with me on LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://twitter.com/ErmiErmu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow me on Twitter"
        >
          <FaTwitter />
        </a>
      </div>
      <button
        className={styles.backToTop}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <FaArrowUp />
      </button>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} Ermiyas Werdofa · Built with React
      </p>
    </footer>
  );
};

export default Footer;
