import styles from './HeaderMenuMob.module.css';

const HeaderMenuMob = () => {
    return (
      <div className={styles.menu}>
        <p className={styles.name}>Katsiaryna Ageyeva</p>
        <p className={styles.position}>React &#38; React Native Developer</p>
        <ul className={styles.menubar}>
          <li>
            <a href="#info">
              <p>Info</p>
              <hr className="solid" />
            </a>
          </li>
          <li>
            <a href="#projects">
              <p>Projects</p>
              <hr className="solid" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <p>Contact</p>
              <hr className="solid" />
            </a>
          </li>
        </ul>
      </div>
    );
};

export default HeaderMenuMob;