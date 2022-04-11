import styles from './HeaderMenu.module.css';

const HeaderMenu = () => {
    return (
      <div className={styles.headertext}>
        <p className={styles.name}>Katsiaryna Ageyeva</p>
        <p className={styles.position}>React &#38; React Native Developer</p>
        <ul className={styles.listitems}>
          <li>
            <a href="#info">
              <p>Info</p>
            </a>
          </li>
          <li>
            <a href="#projects">
              <p>Projects</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </div>
    );
};

export default HeaderMenu;