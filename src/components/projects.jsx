

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} delay={index * 100} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

