import Paragr from "../../models/paragr";
import styles from './ParagraphMob.module.css';

const Paragraph: React.FC<{items: Paragr[]}> = (props) => {
    return (
        <ul className={styles.content}>
          {props.items.map((item) => (
            <li key={item.header}>
              <h3>{item.header}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
    );
};

export default Paragraph;