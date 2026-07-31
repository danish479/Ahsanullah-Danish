import React from 'react';
import styles from './HeroStyle.module.css';
import heroImg from '../../assets/proHero.png';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import { useTheme } from '../../common/ThemeContext';
import instaIcon from '../../assets/instagram.png';
import facebookIcon from '../../assets/facebook.png';
import githubIcon from '../../assets/github.png';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Ahsanullah Danish"
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Theme icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Ahsanullah
          <br />
          Danish
        </h1>

        <h2>Full Stack Developer</h2>

        <span>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="instaIcon"
              src={instaIcon}
              alt="Instagram"
            />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="githubIcon"
              src={githubIcon}
              alt="GitHub"
            />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="facebookIcon"
              src={facebookIcon}
              alt="Facebook"
            />
          </a>
        </span>

        <p className={styles.description}>
          With a passion for developing modern web apps for businesses.
        </p>
      </div>
    </section>
  );
}

export default Hero;