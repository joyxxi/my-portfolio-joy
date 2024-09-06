import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &#169;2024 Zhixi Xu. <br />
        All rights reserved.
        <a href="https://github.com/joyxxi/my-portfolio-joy" target="_blank">
          <p>Sourtce Code</p>
        </a>
      </p>
    </section>
  );
}

export default Footer;
