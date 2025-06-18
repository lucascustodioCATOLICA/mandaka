import { useEffect, useState } from "react";
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
import { ProductsStorage } from "../../infra/storage/products";
import useLogin from "../../screens/Login/hooks/useLogin";

const DetailsInCozinha = ({ open, onClose, selectedProduct }) => {
  const { getHasUserLogged } = useLogin();

  const [count, setCount] = useState();
  const [userObservations, setUserObservations] = useState();
  const hasUserLogged = getHasUserLogged();

  useEffect(() => {
    if (selectedProduct?.count) {
      setCount(selectedProduct.count);
    }
  }, [selectedProduct]);
  useEffect(() => {
    if (selectedProduct?.userObservations) {
      setUserObservations(selectedProduct.userObservations);
    }
  }, [selectedProduct]);

  if (!selectedProduct) {
    return null;
  }

  const renderTagByTagName = (name, element) =>
    selectedProduct.product.label.map((item) => {
      if (item === name) return <div className={styles.tag}>{element}</div>;
    });

  const handleCounterAddButtonPress = () => {
    setCount((prev) => prev + 1);
  };

  const handleCounterMinusButtonPress = () => {
    setCount((prev) => {
      if (prev !== 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const handleAddButtonPress = () => {
    onClose();
  };

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
          <img
            src={selectedProduct.product.imageUrl}
            className={styles.image}
          />
        </div>
        <div className={styles.title}>{selectedProduct.product.name}</div>
        <div className={styles.desc}>{selectedProduct.product.desc}</div>
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
          <Input
            value={userObservations}
            placeholder="Ex: tirar a cebola, maionese à parte etc."
            onChangeText={setUserObservations}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.counter}>
            <div onClick={handleCounterMinusButtonPress}>
              <Minus className={styles.disabled_icon} />
            </div>
            <div className={styles.counter_text}>{count}</div>
            <div onClick={handleCounterAddButtonPress}>
              <Plus className={styles.enabled_icon} />
            </div>
          </div>
          <Button disabled={!hasUserLogged} onPress={handleAddButtonPress}>
            <div className={styles.button_text}>
              <div>Adicionar </div>
              <div>R${formatMoney(selectedProduct.product.price)}</div>
            </div>
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default DetailsInCozinha;
