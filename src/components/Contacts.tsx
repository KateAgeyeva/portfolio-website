import image from '../assets/DSC04250.jpg';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
      <div className={styles.contactscontainer} id="contact">
        <img className={styles.picture} src={image}></img>
        <div>
            <p><i>GitHub:</i> <a href="https://github.com/KateAgeyeva">https://github.com/KateAgeyeva</a></p>
            <p><i>LinkedIn:</i> <a href="https://www.linkedin.com/in/kate-ageyeva/">https://www.linkedin.com/in/kate-ageyeva/</a></p>
            <p><i>Email:</i> kate.ag.au@gmail.com</p>
        </div>
      </div>
    );
};

export default Contacts;