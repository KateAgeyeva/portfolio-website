import myImage from '../assets/_MG_3229.jpeg';
import styles from './AboutMe.module.css';
import Paragraph from './Paragraph';
import Paragr from '../models/paragr';

function AboutMe() {
    const paragraphs = [
        new Paragr('About me', 'I have been learning Front-end development for almost a year starting with HTML/CSS till React/React Native. I am fascinated by React development and everything connected to it. Open for Junior/Entry-level positions. I went through many courses (html/css, d3.js, JavaScript, React, React Native) along with my own projects. I worked on a project based on Agile development process with 2 more people. Previously I worked for an IT company and familiar with software development processes.'),
        new Paragr('Skills', 'HTML, CSS, Javascript, React, React Native (Expo CLI), Redux, Bootstrap, Tailwind, D3.JS, Node.JS + Express, REST API, Next.JS, Jest (basic), TypeScript (basic), SQL(basic),  Git, Jira, Heroku, Vercel, Android Studio, VSCode.')
    ];
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Katsiaryna Ageyeva</h2>
          <h3>React/React Native Developer</h3>
          <div className={styles.contacts}>
              <p className={styles['margin-right']}>GitHub: KateAgeyeva</p>
              <p>LinkedIn: Kate Ageyeva</p>
          </div>
        </div>
        <div className={styles.about}>
          <div>
            <img src={myImage} className={styles.image}></img>
          </div>
          <div className={styles.text}>
            <Paragraph items={paragraphs} />
          </div>
        </div>
      </div>
    );
};

export default AboutMe;