import styles from "./ProductItem.module.css";
import Minus from "../../../../assets/icons/minus.svg?react";
import Plus from "../../../../assets/icons/plus.svg?react";

function ProductItem({ id, name, image, label, price, count }) {
  return (
    <div key={id} className={styles.container}>
      <div className={styles.row}>
        <div className={styles.image_background}>
          <img src={image} className={styles.image} />
        </div>
        <div>
          <div className={styles.label}>{label}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>R${price}</div>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.minus_container}>
          <Minus className={styles.icon} />
        </div>
        <div className={styles.count}>{count}</div>
        <div className={styles.plus_container}>
          <Plus className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
