import React from 'react';
import styles from './Cozinha.module.css';
import Header from '../../components/Header/Header'; // Supondo que você tenha um Header
import steakImage from '../../assets/steak.jpg'; // Coloque uma imagem nos seus assets

// Dados de exemplo que simulam os pedidos vindos do backend
const kitchenOrders = [
  { id: 1, name: 'STEAK DO COWBOY', status: 'Analisando pedido', number: '#04569341', time: '59min' },
  { id: 2, name: 'STEAK DO COWBOY', status: 'Preparando...', number: '#04569341', time: '39min', progress: '60%' },
  { id: 3, name: 'STEAK DO COWBOY', status: 'Levando para mesa.', number: '#04569341', time: 'Finalizado' },
];

// Componente para renderizar cada card de pedido
const OrderCard = ({ order }) => {
  const getStatusClass = () => {
    switch (order.status) {
      case 'Analisando pedido':
        return styles.solid;
      case 'Preparando...':
        return styles.progress;
      case 'Levando para mesa.':
        return styles.finalized;
      default:
        return '';
    }
  };

  return (
    <div className={styles.orderCard}>
      <img src={steakImage} alt={order.name} className={styles.orderImage} />
      <div className={styles.orderDetails}>
        <h3 className={styles.orderName}>{order.name}</h3>
        <p className={styles.orderStatus}>Status: {order.status}</p>
        <p className={styles.orderNumber}>N.º do pedido: {order.number}</p>
        <div className={`${styles.statusBar} ${getStatusClass()}`}>
          {order.status === 'Preparando...' ? (
            <>
              <div className={styles.progressBar} style={{ width: order.progress }}></div>
              <span>{order.time}</span>
            </>
          ) : (
            order.time
          )}
        </div>
      </div>
    </div>
  );
};

// Componente principal da tela da Cozinha
const Cozinha = () => {
  return (
    <div className={styles.kitchenScreen}>
      <Header />
      <main className={styles.kitchenContent}>
        <div className={styles.titleSection}>
          <h2>COZINHA</h2>
          <p>Seu pedido tá indo pra brasa!</p>
        </div>

        <div className={styles.ordersList}>
          {kitchenOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </main>

      <footer className={styles.disclaimer}>
        <p>
          Você pode editar ou cancelar seu pedido enquanto ele ainda tá na fase de preparo.
        </p>
        <p>
          Caso seu pedido já estiver finalizado e você quiser cancelar, será cobrada uma taxa de R$50,00 — pelo dispedício e tempo
        </p>
      </footer>
    </div>
  );
};

export default Cozinha;