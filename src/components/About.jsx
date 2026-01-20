
import useScrollAnimation from "../hooks/useScrollAnimation";

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="fade-up">
      <h2>About Me</h2>

      <p>
        I’m a full-stack web developer with a strong foundation in biology and
        professional experience in research and biotech environments. This
        background enables me to approach software development with a
        detail-oriented, analytical, and problem-solving mindset.
      </p>

      <p>
        I build clean, scalable, and user-focused web applications using modern
        technologies such as{" "}
        <strong>React, Node.js, Express, SQL, and REST APIs</strong>. I enjoy
        writing maintainable code and turning complex ideas into intuitive
        digital experiences.
      </p>

      <p>
        My career goal is to grow as a software engineer while contributing to
        impactful projects—especially in healthcare, data-driven systems, and
        technology that improves real-world outcomes.
      </p>
    </section>
  );
};

export default About;
