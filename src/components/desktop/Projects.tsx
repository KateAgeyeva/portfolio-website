//import VideoPlayer from "../models/video";

import styles from './Projects.module.css';
import image from '../../assets/news-rate-1.png';
import image2 from '../../assets/news-rate-2.png';

import im1 from '../../assets/1im.jpg';
import im2 from '../../assets/2im.jpg';
import im3 from '../../assets/3im.jpg';
import im4 from '../../assets/4im.jpg';
import im5 from '../../assets/5im.jpg';
import im6 from '../../assets/6im.jpg';

// FILES AVAILABLE FROM A SERVER ONLY
// const videoJsOptions = {
//   sources: [
//     {
//       src: "../assets/newsratevideo.mp4", //SERVER LINK
//       type: "video/mp4",
//     },
//   ],
// };

const Projects = () => {
    // return <VideoPlayer options={videoJsOptions} />;
    return (
      <div className={styles.containerproj} id='projects'>
        <div className={styles.projone}>
          <p className={styles.header}>News Rates Web App</p>
          <p className={styles.text}>
            Here you can find top-20 latest news in the Netherlands and compare any news popularity worldwide filling a form. This website can help journalists, researchers and other people. The project is based on React/Next.js. <a href="https://github.com/KateAgeyeva/news-rate" target="_blank">GitHub: KateAgeyeva/news-rate</a>
          </p>
          <div className={styles.examples}>
              <a href={image} target="_blank">
                <img className={styles.img} src={image}></img>
              </a>
              <a href={image2} target="_blank">
                <img className={styles.img} src={image2}></img>
              </a>
          </div>
        </div>

        <div className={styles.projtwo}>
          <p className={styles.header}>Writer Helper Mobile App</p>
          <p className={styles.text}>
            Here you can creat/edit books, add chapters and notes, share the books and chapters in DOCX format. The app has a simple design to let writers concentrating on a content of their books as it could be on a plain paper sheet. The project is based on React Native/Expo CLI. <a href="https://github.com/KateAgeyeva/writerhelper" target="_blank">GitHub: KateAgeyeva/writerhelper</a>
          </p>
          <div className={styles.imgsecondcontainer}>
              <div>
                <a href={im1} target="_blank">
                  <img className={styles.imgsecond} src={im1}></img>
                </a>
                <a href={im2} target="_blank">
                  <img className={styles.imgsecond} src={im2}></img>
                </a>
                <a href={im3} target="_blank">
                  <img className={styles.imgsecond} src={im3}></img>
                </a>
              </div>
              <div>
                <a href={im4} target="_blank">
                  <img className={styles.imgsecond} src={im4}></img>
                </a>
                <a href={im5} target="_blank">
                  <img className={styles.imgsecond} src={im5}></img>
                </a>
                <a href={im6} target="_blank">
                  <img className={styles.imgsecond} src={im6}></img>
                </a>
              </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;
