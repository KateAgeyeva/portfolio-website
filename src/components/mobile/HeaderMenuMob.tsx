import styles from './HeaderMenuMob.module.css';

const HeaderMenu = () => {
    return (
      <div className={styles.menu}>
        <p>Katsiaryna Ageyeva</p>
        <p>React &#38; React Native Developer</p>
        <ul className={styles.menu}>
          <li className={styles.menu}>
            <a href="#info">
              <p>Info</p>
            </a>
          </li>
          <li className={styles.menu}>
            <a href="#projects">
              <p>Projects</p>
            </a>
          </li>
          <li className={styles.menu}>
            <a href="#contact">
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </div>
    );
};

export default HeaderMenu;