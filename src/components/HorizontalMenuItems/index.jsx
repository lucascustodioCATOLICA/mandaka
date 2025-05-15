import styles from "./styles.module.css";

const HorizontalMenuItems = () => {
  return (
    <div className={styles.list}>
      <div className={styles.item_container}>
        <div>
          <img
            className={styles.food_image}
            src="/images/foods/menu-item-model-1.png"
          />
        </div>
        <div className={styles.title}>Steak do Cowboy</div>
        <div className={styles.description_container}>
          <div>42min</div>
          <div className={styles.dot} />
          <div>R$34,90</div>
        </div>
      </div>
      <div className={styles.item_container}>
        <div>
          <img
            className={styles.food_image}
            src="/images/foods/menu-item-model-1.png"
          />
        </div>
        <div className={styles.title}>Steak do Cowboy</div>
        <div className={styles.description_container}>
          <div>42min</div>
          <div className={styles.dot} />
          <div>R$34,90</div>
        </div>
      </div>
      <div className={styles.item_container}>
        <div>
          <img
            className={styles.food_image}
            src="/images/foods/menu-item-model-1.png"
          />
        </div>
        <div className={styles.title}>Steak do Cowboy</div>
        <div className={styles.description_container}>
          <div>42min</div>
          <div className={styles.dot} />
          <div>R$34,90</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMenuItems;
