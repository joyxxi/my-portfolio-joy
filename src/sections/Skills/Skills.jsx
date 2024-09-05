import styles from './SkillsStyles.module.css';
import checkmarkLight from '../../assets/checkmark-light.svg';
import checkmarkDark from '../../assets/checkmark-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import SkillList from '../../common/SkillList';

function Skills() {
  const { theme } = useTheme();
  const checkmark = theme === 'light' ? checkmarkLight : checkmarkDark;

  return (
    <section id="skills" className={styles.container}>
      <p>Explore My</p>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.categories}>
        <div className={styles.skillsContainer}>
          <h2 className="skillsTitle">Language</h2>
          <div className={styles.skillList}>
            <SkillList checkmark={checkmark} skill="Java" />
            <SkillList checkmark={checkmark} skill="Python" />
            <SkillList checkmark={checkmark} skill="JavaScript/TypeScript" />
            <SkillList checkmark={checkmark} skill="Go" />
            <SkillList checkmark={checkmark} skill="C/C++" />
            <SkillList checkmark={checkmark} skill="HTML/CSS" />
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h2 className="skillsTitle">Frameworks</h2>
          <div className={styles.skillList}>
            <SkillList checkmark={checkmark} skill="Spring Boot" />
            <SkillList checkmark={checkmark} skill="Spring Cloud" />
            <SkillList checkmark={checkmark} skill="Node.js" />
            <SkillList checkmark={checkmark} skill="Express" />
            <SkillList checkmark={checkmark} skill="React" />
            <SkillList checkmark={checkmark} skill="Django" />
            <SkillList checkmark={checkmark} skill="SwiftUI(iOS)" />
            <SkillList checkmark={checkmark} skill="MyBatis" />
            <SkillList checkmark={checkmark} skill="TypeORM" />
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h2 className="skillsTitle">Database & DevOps</h2>
          <div className={styles.skillList}>
            <SkillList checkmark={checkmark} skill="MySQL" />
            <SkillList checkmark={checkmark} skill="PostgreSQL" />
            <SkillList checkmark={checkmark} skill="MongoDB" />
            <SkillList checkmark={checkmark} skill="Redis" />
            <SkillList checkmark={checkmark} skill="Elasticsearch" />
            <SkillList checkmark={checkmark} skill="Docker" />
            <SkillList checkmark={checkmark} skill="Kubernetes" />
            <SkillList checkmark={checkmark} skill="Jenkins" />
            <SkillList checkmark={checkmark} skill="CI/CD" />
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h2 className="skillsTitle">Cloud & Tools</h2>
          <div className={styles.skillList}>
            <SkillList checkmark={checkmark} skill="AWS" />
            <SkillList checkmark={checkmark} skill="Git" />
            <SkillList checkmark={checkmark} skill="REST APIs" />
            <SkillList checkmark={checkmark} skill="RabbitMQ" />
            <SkillList checkmark={checkmark} skill="BUllMQ" />
            <SkillList checkmark={checkmark} skill="Redux" />
            <SkillList checkmark={checkmark} skill="Maven" />
            <SkillList checkmark={checkmark} skill="JUnit" />
            <SkillList checkmark={checkmark} skill="Figma" />
            <SkillList checkmark={checkmark} skill="Postman" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
