import styles from './HeaderMenuMob.module.css';

const HeaderMenu = () => {
    return (
      <div className={styles.menu}>
        <h2>Katsiaryna Ageyeva</h2>
        <p>React &#38; React Native Developer</p>
        <ul className={styles.menubar}>
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