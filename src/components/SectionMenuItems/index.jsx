import styles from "./styles.module.css";

const SectionMenuItems = ({ title, list }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {list.map((item) => (
        <div>
          <div className={styles.menu_item}>
            <img className={styles.food_image} src={item.imageUrl} />
            <div className={styles.right}>
              <div className={styles.item_menu_title}>{item.name}</div>
              <div className={styles.description_container}>
                <div className={styles.item_menu_text}>{item.duration}min</div>
                <div className={styles.dot} />
                <div className={styles.item_menu_text}>R${item.price}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionMenuItems;
