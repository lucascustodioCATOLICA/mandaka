import { formatMoney } from "../../helpers/format-money";
import styles from "./styles.module.css";

const HorizontalMenuItems = ({ id, list, onProductItemPress }) => {
  return (
    <div id={id} className={styles.list}>
      {list.map((item) => (
        <div
          key={item.id}
          className={styles.item_container}
          onClick={() => onProductItemPress(item)}
        >
          <div className={styles.food_image_container}>
            <img className={styles.food_image} src={item.imageUrl} />
          </div>
          <div className={styles.title}>{item.name}</div>
          <div className={styles.description_container}>
            <div>{item.duration}min</div>
            <div className={styles.dot} />
            <div>R${formatMoney(item.price)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalMenuItems;
