import styles from './contactStyles.module.css';
import emailIconDark from '../../assets/email-icon-dark.svg';
import emailIconLight from '../../assets/email-icon-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import { useTheme } from '../../common/ThemeContext';

function Contact() {
  const { theme } = useTheme();
  const emailIcon = theme === 'light' ? emailIconLight : emailIconDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="contact" className={styles.container}>
      <p>Get In Touch</p>
      <h1 className="sectionTitle">Contact Me</h1>
      <div className={styles.contactContainer}>
        <div className={styles.infoContainer}>
          <span>
            <img src={emailIcon} alt="email icon" />
            <a href="mailto:zhixi.xu.joy@gmail.com" target="_blank">
              <p>zhixi.xu.joy@gmail.com</p>
            </a>
          </span>
          <span>
            <img src={linkedinIcon} alt="linkedin icon" />
            <a href="https://www.linkedin.com/in/zhixi-xu/" target="_blank">
              <p>LinkedIn</p>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
