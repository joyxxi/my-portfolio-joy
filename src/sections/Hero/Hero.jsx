import styles from './HeroStyles.module.css';
import photoImg from '../../assets/joy-photo_optimized_1_optimized.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import Resume from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={photoImg}
          alt="Profile picture of Zhixi Xu"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <p>Hello, I&apos;m</p>
        <h1>Zhixi Xu</h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/zhixi-xu/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <span>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button className="hover">Resume</button>
          </a>
          <a>
            <button className="hover">Contact</button>
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
