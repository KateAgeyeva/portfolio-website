import Paragr from "../models/paragr";
import styles from './Paragraph.module.css';

const Paragraph: React.FC<{items: Paragr[]}> = (props) => {
    return (
      <div>
        <ul className={styles.list}>
          {props.items.map((item) => (
            <li key={item.header}>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Paragraph;