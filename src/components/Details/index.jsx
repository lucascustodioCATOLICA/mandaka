import { BottomSheet } from "react-spring-bottom-sheet";

import ArrowDown from "../../assets/icons/arrow-down.svg?react";
import Heart from "../../assets/icons/heart.svg?react";
import Egg from "../../assets/icons/egg.svg?react";
import Soja from "../../assets/icons/soja.svg?react";
import Milk from "../../assets/icons/milk.svg?react";
import Crab from "../../assets/icons/crab.svg?react";
import Peanut from "../../assets/icons/peanut.svg?react";

import styles from "./styles.module.css";

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
      </div>
      <div className={styles.image_container}>
        <img
          src="/images/foods/menu-item-model-1.png"
          className={styles.image}
        />
      </div>
      <div>Steak do cowboy</div>
      <div>
        Corte extraído da parte dianteira, entre o Ancho e o Acém, extremamente
        macio e suculento (300g).
      </div>
      <div>
        <div>
          <Egg />
        </div>
        <div>
          <Soja />
        </div>
        <div>
          <Milk />
        </div>
        <div>
          <Crab />
        </div>
        <div>
          <Peanut />
        </div>
      </div>
      <div>
        <div>Adicionar observação?</div>
        <div>0/140</div>
      </div>
    </BottomSheet>
  );
};

export default Details;
