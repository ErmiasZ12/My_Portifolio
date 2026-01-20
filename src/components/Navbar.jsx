

import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        {/* Navbar links only */}
        <ul className={styles.links}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/resume/Ermiyas_Werdofa_Web_Developer_Resume.pdf" download>
              Resume
            </a>
          </li>
        </ul>
        <button className={styles.themeBtn} onClick={toggleTheme}>
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
