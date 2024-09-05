import styles from './ProjectsStyle.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <p>Browse My Selected</p>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          githubLink=""
          demoLink=""
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={viberr}
          githubLink=""
          demoLink=""
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={viberr}
          githubLink=""
          demoLink=""
          h3="Viberr"
          p="Streaming App"
        />
      </div>
    </section>
  );
}

export default Projects;
