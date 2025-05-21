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

const Details = ({ open }) => {
  return (
    <BottomSheet open={open}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.icon_container}>
            <ArrowDown />
          </div>
          <div className={styles.icon_container}>
            <Heart />
          </div>
        </div>
        <div className={styles.image_container}>
          <img
            src="/images/foods/menu-item-model-1.png"
            className={styles.image}
          />
        </div>
        <div className={styles.title}>Steak do cowboy</div>
        <div className={styles.desc}>
          Corte extraído da parte dianteira, entre o Ancho e o Acém,
          extremamente macio e suculento (300g).
        </div>
        <div className={styles.tags_container}>
          <div className={styles.tag}>
            <Egg />
          </div>
          <div className={styles.tag}>
            <Soja />
          </div>
          <div className={styles.tag}>
            <Milk />
          </div>
          <div className={styles.tag}>
            <Crab />
          </div>
          <div className={styles.tag}>
            <Peanut />
          </div>
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
              <div>R$34,90</div>
            </div>
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default Details;
