import Paragr from "../../models/paragr";
import styles from './Paragraph.module.css';

const Paragraph: React.FC<{items: Paragr[]}> = (props) => {
    return (
      <div id="info">
        <ul className={styles.listpr}>
          {props.items.map((item) => (
            <li className={styles.item} key={item.header}>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Paragraph;