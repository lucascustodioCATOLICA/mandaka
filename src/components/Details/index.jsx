import { BottomSheet } from "react-spring-bottom-sheet";

import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import Heart from "../../assets/icons/heart.svg?react";
import Egg from "../../assets/icons/egg.svg?react";
import Soja from "../../assets/icons/soja.svg?react";
import Milk from "../../assets/icons/milk.svg?react";
import Crab from "../../assets/icons/crab.svg?react";
import Peanut from "../../assets/icons/peanut.svg?react";
import Minus from "../../assets/icons/minus.svg?react";
import Plus from "../../assets/icons/plus.svg?react";

import styles from "./styles.module.css";
import Button from "../Button";
import Input from "../Input";
import { formatMoney } from "../../helpers/format-money";

const Details = ({ open, onClose, selectedProduct }) => {
  if (!selectedProduct) {
    return null;
  }

  const renderTagByTagName = (name, element) =>
    selectedProduct.label.map((item) => {
      if (item === name) return <div className={styles.tag}>{element}</div>;
    });

  return (
    <BottomSheet open={open} initialFocusRef={false}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.icon_container} onClick={onClose}>
            <ArrowDown />
          </div>
          <div className={styles.icon_container}>
            <Heart />
          </div>
        </div>
        <div className={styles.image_container}>
          <img src={selectedProduct.imageUrl} className={styles.image} />
        </div>
        <div className={styles.title}>{selectedProduct.name}</div>
        <div className={styles.desc}>{selectedProduct.desc}</div>
        <div className={styles.tags_container}>
          {renderTagByTagName("egg", <Egg />)}
          {renderTagByTagName("soja", <Soja />)}
          {renderTagByTagName("milk", <Milk />)}
          {renderTagByTagName("crab", <Crab />)}
          {renderTagByTagName("peanut", <Peanut />)}
        </div>
        <div className={styles.obs_container}>
          <div className={styles.obs_text_container}>
            <div className={styles.obs_text_bold}>Adicionar observação?</div>
            <div className={styles.obs_text}>0/140</div>
          </div>
          <Input placeholder="Ex: tirar a cebola, maionese à parte etc." />
        </div>
        <div className={styles.bottom}>
          <div className={styles.counter}>
            <div>
              <Minus className={styles.disabled_icon} />
            </div>
            <div className={styles.counter_text}>1</div>
            <div>
              <Plus className={styles.enabled_icon} />
            </div>
          </div>
          <Button>
            <div className={styles.button_text}>
              <div>Adicionar </div>
              <div>R${formatMoney(selectedProduct.price)}</div>
            </div>
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default Details;
