import myImage from '../assets/_MG_3229.jpeg';
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
      <div>
        <div>
          <img src={myImage} className={styles.image}></img>
          <h3>Frontend React/React Native Developer</h3>
        </div>
        <div>
            <h3>About me</h3>
            <p>Entry-level specialist</p>
        </div>
        <div>
            <h3>Skills</h3>
            <p>React, React Native</p>
        </div>
      </div>
    );
};

export default AboutMe;