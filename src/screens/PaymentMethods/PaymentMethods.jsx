import { useNavigate } from "react-router";

import DarkNavbar from "../../components/DarkNavBar";
import PaymentMethodButton from "./components/PaymentMethodButton/PaymentMethodButton";

import styles from "./PaymentMethods.module.css";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { PedidosService } from "../../services/pedidos";
import { ProductsStorage } from "../../infra/storage/products";
import { MetodosDePagamentoService } from "../../services/metodos_de_pagamento";
import { UserStorage } from "../../infra/storage/user";
import useLogin from "../Login/hooks/useLogin";

const PAYMENT_METHODS = [
  {
    id: 0,
    name: "Cartão (crédito ou débito)",
  },
  {
    id: 1,
    name: "Dinheiro Físico",
  },
  {
    id: 2,
    name: "Pix",
  },
];

function Carrinho() {
  const navigate = useNavigate();
  const { getUser, getHasUserLogged } = useLogin();
  const [selected, setSelected] = useState(null);
  const [methods, setMethods] = useState([]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleClickButton = (id) => {
    setSelected(id);
  };

  const handleSendToKitchenButtonPress = () => {
    if (selected !== null && getHasUserLogged) {
      const { userId } = getUser();
      const products = ProductsStorage.getProductsFromCarrinho();
      products.forEach((item) =>
        PedidosService.addPedidos({
          ...item,
          methodPaymentId: selected,
          userId,
        })
      );
      ProductsStorage.resetProductsFromCarrinho();
    }
    navigate(-2);
  };

  useEffect(() => {
    const getMetodos = async () => {
      const metodosFromService = await MetodosDePagamentoService.getMetodos();
      setMethods(metodosFromService);
    };
    getMetodos();
  }, []);

  return (
    <div className={styles.background}>
      <DarkNavbar onGoBack={handleGoBack} />
      <div>
        <div className={styles.title}>Forma de Pagamento</div>
        <div className={styles.message}>
          Escolha a forma de pagamento que o nosso garçom vai até sua mesa
          rapidinho pra finalizar tudo com você.
        </div>
        {methods.map((payment) => (
          <PaymentMethodButton
            onClick={() => handleClickButton(payment.id)}
            key={payment.id}
            name={payment.name}
            isActive={selected === payment.id}
          />
        ))}
      </div>
      <div className={styles.bottom}>
        <Button onPress={handleSendToKitchenButtonPress}>
          Mandar para cozinha!
        </Button>
      </div>
    </div>
  );
}

export default Carrinho;
