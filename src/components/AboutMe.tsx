import styles from './AboutMe.module.css';
import Paragraph from './Paragraph';
import Paragr from '../models/paragr';
import HeaderMenu from './HeaderMenu';

function AboutMe() {
    const paragraphs = [
        new Paragr('About me', 'I have been learning Front-end development for a year starting with HTML/CSS till React/React Native. I am fascinated by React development and everything connected to it and currently open for Junior/Entry-level positions. I went through many courses (HTML/CSS, D3.js, JavaScript, React, React Native) as long as my own projects. I worked on a project based on Agile development process with 2 more people. Previously I studed software QA and worked for an IT company. That is why I am familiar with software development processes.'),
        new Paragr('Skills', 'HTML, CSS, Javascript, React, React Native (Expo CLI), Redux/Redux Toolkit, Bootstrap, Tailwind, D3.JS, Node.JS + Express, REST API, Next.JS, Jest (basic), TypeScript (basic), SQL(basic), Git, Jira, Heroku, Vercel, Android Studio, VSCode.')
    ];
    return (
      <div className={styles.container}>
        <HeaderMenu />
        <div id='info'>
          <Paragraph items={paragraphs} />
        </div>
      </div>
    );
};

export default AboutMe;