import styles from "./styles.module.css";

const SectionMenuItems = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div>
        <div className={styles.menu_item}>
          <img
            className={styles.food_image}
            src="/images/foods/menu-item-model-1.png"
          />
          <div className={styles.right}>
            <div className={styles.item_menu_title}>Steak do Cowboy</div>
            <div className={styles.description_container}>
              <div className={styles.item_menu_text}>42min</div>
              <div className={styles.dot} />
              <div className={styles.item_menu_text}>R$34,90</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.menu_item}>
          <img
            className={styles.food_image}
            src="/images/foods/menu-item-model-1.png"
          />
          <div className={styles.right}>
            <div className={styles.item_menu_title}>Steak do Cowboy</div>
            <div className={styles.description_container}>
              <div className={styles.item_menu_text}>42min</div>
              <div className={styles.dot} />
              <div className={styles.item_menu_text}>R$34,90</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.menu_item}>
          <img
            className={styles.food_image}
            src="/images/foods/menu-item-model-1.png"
          />
          <div className={styles.right}>
            <div className={styles.item_menu_title}>Steak do Cowboy</div>
            <div className={styles.description_container}>
              <div className={styles.item_menu_text}>42min</div>
              <div className={styles.dot} />
              <div className={styles.item_menu_text}>R$34,90</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMenuItems;
