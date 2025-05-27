import { useNavigate } from "react-router";

import DarkNavbar from "../../components/DarkNavBar";
import PaymentMethodButton from "./components/PaymentMethodButton/PaymentMethodButton";

import styles from "./PaymentMethods.module.css";
import { useState } from "react";
import Button from "../../components/Button";

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
  const [selected, setSelected] = useState(null);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleClickButton = (id) => {
    setSelected(id);
  };

  return (
    <div className={styles.background}>
      <DarkNavbar onGoBack={handleGoBack} />
      <div>
        <div className={styles.title}>Forma de Pagamento</div>
        <div className={styles.message}>
          Escolha a forma de pagamento que o nosso garçom vai até sua mesa
          rapidinho pra finalizar tudo com você.
        </div>
        {PAYMENT_METHODS.map((payment) => (
          <PaymentMethodButton
            onClick={() => handleClickButton(payment.id)}
            key={payment.id}
            name={payment.name}
            isActive={selected === payment.id}
          />
        ))}
      </div>
      <div className={styles.bottom}>
        <Button>Mandar para cozinha!</Button>
      </div>
    </div>
  );
}

export default Carrinho;
