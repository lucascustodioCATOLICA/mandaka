import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router'; 
import styles from './Cozinha.module.css'; 

import DarkNavbar from '../../components/DarkNavBar'; 
import { ProductsStorage } from "../../infra/storage/products"; 

const OrderCard = ({ order }) => {
  const getStatusClass = () => {
    switch (order.status) {
      case 'Analisando pedido':
        return styles.statusAnalyzing;
      case 'Preparando...':
        return styles.statusPreparing;
      case 'Levando para mesa.':
        return styles.statusDelivering;
      default:
        return '';
    }
  };

  const displayStatus = order.status === 'Finalizado' ? 'Finalizado' : order.time;

  return (
    <div className={styles.orderCard}>
      <img src={order.product.imageUrl || steakImage} alt={order.product.name} className={styles.orderImage} />
      <div className={styles.orderDetails}>
        <h3 className={styles.orderName}>{order.product.name}</h3> 
        <p className={styles.orderInfo}>Status: {order.status}</p>
        <p className={styles.orderInfo}>N.º do pedido: #{order.id}</p> 
        
        <div className={`${styles.statusBarContainer} ${getStatusClass()}`}>
          {order.status === 'Preparando...' ? (
            <>
              {/* Barra de progresso não funcional */}
              <div className={styles.progressBar} style={{ width: '60%' }}></div> 
              <span className={styles.statusTime}>{displayStatus}</span>
            </>
          ) : (
            <span className={styles.statusTime}>{displayStatus}</span>
          )}
        </div>
      </div>
    </div>
  );
};

function Cozinha() { 
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  useEffect(() => {
    const productsFromStorage = ProductsStorage.getProductsFromCarrinho();
    
    const initialOrders = productsFromStorage.map(item => ({
      ...item,
      status: 'Analisando pedido', 
      time: '59min' 
    }));
    setOrders(initialOrders);
  }, []);

  return (
    <div className={styles.kitchenScreen}>
      <DarkNavbar onGoBack={handleGoBack} />

      <main className={styles.kitchenContent}>
        <div className={styles.mainTitleSection}>
          <h2 className={styles.mainTitle}>COZINHA</h2>
          <p className={styles.mainSubtitle}>Seu pedido tá indo pra brasa!</p>
        </div>

        <div className={styles.ordersList}>
          {orders.length > 0 ? (
            orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))
          ) : (
            <p className={styles.emptyKitchenMessage}>Nenhum pedido no momento. Adicione itens ao carrinho!</p>
          )}
        </div>
      </main>

      <footer className={styles.disclaimer}>
        <p>
          Você pode editar ou cancelar seu pedido enquanto ele ainda tá na fase de preparo.
        </p>
        <p>
          Caso seu pedido já estiver finalizado e você quiser cancelar, será cobrada uma taxa de <span className={styles.disclaimerHighlight}>R$50,00</span> — pelo dispedício e tempo
        </p>
      </footer>
    </div>
  );
}

export default Cozinha;
