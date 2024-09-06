function ProjectCard({ src, githubLink, demoLink, h3, p }) {
  return (
    <div>
      <img src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <span>
        <a href={githubLink} target="_blank">
          <button className="hover">GitHub</button>
        </a>
        {/* Integrate in-window video later? */}
        <a href={demoLink} target="_blank">
          <button className="hover">Demo</button>
        </a>
      </span>
    </div>
  );
}

export default ProjectCard;
