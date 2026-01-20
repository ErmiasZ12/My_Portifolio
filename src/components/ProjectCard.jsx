

import useScrollAnimation from "../hooks/useScrollAnimation";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, delay = 0 }) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} />
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className={styles.tech}>{project.tech}</p>

      <div className={styles.links}>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}

        {project.code && (
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
