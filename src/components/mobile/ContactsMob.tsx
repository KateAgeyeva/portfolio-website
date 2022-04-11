import image from '../../assets/DSC04250.jpg';

import styles from './ContactsMob.module.css';

const Contacts = () => {
    return (
      <div className={styles.contactscontainer} id="contact">
        <div className={styles.contacts}>
          <p className={styles.text}><i>GitHub:</i> <a href="https://github.com/KateAgeyeva" target="_blank">https://github.com/KateAgeyeva</a></p>
          <p className={styles.text}><i>LinkedIn:</i> <a href="https://www.linkedin.com/in/kate-ageyeva/" target="_blank">https://www.linkedin.com/in/kate-ageyeva/</a></p>
          <p className={styles.text}><i>Email:</i> kate.ag.au@gmail.com</p>
        </div>
        <img className={styles.contactsimg} src={image}></img>
      </div>
    );
};

export default Contacts;