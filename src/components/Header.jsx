


import portfolioLogo from "../assets/images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.headerHero}>
      {/* Identity */}
      <div className={styles.top}>
        <img
          src={portfolioLogo}
          alt="EW personal logo"
          className={styles.logo}
        />

        <div className={styles.nameTitle}>
          <h1 className={styles.title}>Ermiyas Werdofa</h1>
          <h2 className={styles.subtitle}>Full-Stack Web Developer</h2>
        </div>
      </div>

      {/* Value proposition */}
      <p className={styles.intro}>
        I design and build modern, responsive web applications using{" "}
        <strong>React</strong>, <strong>Node.js</strong>, and{" "}
        <strong>SQL</strong>, with a strong focus on scalable systems and
        healthcare technology.
      </p>

      {/* Calls to action */}
      <div className={styles.buttons}>
        <a
          href="#projects"
          className={`${styles.button} ${styles.buttonPrimary}`}
          aria-label="View my projects"
        >
          View Projects
        </a>

        <a href="#contact" className={styles.button} aria-label="Contact me">
          Contact Me
        </a>

        <a
          href="/resume/Ermiyas_Werdofa_Web_Developer_Resume.pdf"
          download
          className={`${styles.button} ${styles.buttonResume}`}
          aria-label="Download my resume"
        >
          Download Résumé
        </a>
      </div>
    </section>
  );
};

export default Header;
