import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Cozinha.module.css";

import DarkNavbar from "../../components/DarkNavBar";
import Details from "../../components/Details";
import { ProductsStorage } from "../../infra/storage/products";
import { PedidosService } from "../../services/pedidos";
import useLogin from "../Login/hooks/useLogin";

//Lógica de status place holder
const OrderCard = ({ order, isSelected, onClick }) => {
  const cardContainerClasses = `${styles.orderCard} ${
    isSelected ? styles.selected : ""
  }`;
  const getStatusClass = () => {
    switch (order.status) {
      case "Analisando pedido":
        return styles.statusAnalyzing;
      case "Preparando...":
        return styles.statusPreparing;
      case "Levando para mesa.":
        return styles.statusDelivering;
      default:
        return "";
    }
  };
  const displayStatus =
    order.status === "Finalizado" ? "Finalizado" : order.time;
  return (
    <div className={cardContainerClasses} onClick={() => onClick(order.docId)}>
      <img
        src={order.product.imageUrl}
        alt={order.product.name}
        className={styles.orderImage}
      />
      <div className={styles.orderDetails}>
        <h3 className={styles.orderName}>{order.product.name}</h3>
        <p className={styles.orderStatusText}>Status: {order.status}</p>
        <p className={styles.orderInfo}>N.º do pedido: #{order.id}</p>
        <div className={`${styles.statusBarContainer} ${getStatusClass()}`}>
          {order.status === "Preparando..." ? (
            <>
              <div
                className={styles.progressBar}
                style={{ width: "60%" }}
              ></div>
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

const SelectionFooter = ({ onCancel, onEdit }) => {
  return (
    <div className={styles.selectionFooter}>
      <p>1 pedido selecionado</p>
      <div className={styles.footerButtons}>
        <button onClick={onCancel} className={styles.cancelButton}>
          Cancelar
        </button>
        <button onClick={onEdit} className={styles.editButton}>
          Editar
        </button>
      </div>
    </div>
  );
};

function Cozinha() {
  const navigate = useNavigate();
  const { getUser } = useLogin();
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleOrderClick = (orderId) => {
    if (selectedOrderId === orderId) {
      setSelectedOrderId(null);
    } else {
      setSelectedOrderId(orderId);
    }
  };

  const handleCancel = async () => {
    PedidosService.deletePedidoById(selectedOrderId).then(() => {
      setOrders((prev) =>
        prev.filter((item) => item.docId !== selectedOrderId)
      );
      setSelectedOrderId(null);
    });
  };

  const handleEdit = () => {
    if (!selectedOrderId) return;
    const orderToEdit = orders.find((order) => order.docId === selectedOrderId);
    if (orderToEdit) {
      setProductToEdit(orderToEdit.product);
      setIsDetailsOpen(true);
      setSelectedOrderId(null);
    }
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setProductToEdit(null);
  };

  useEffect(() => {
    const handlePedidos = async () => {
      try {
        const user = getUser();
        if (!user?.userId) {
          return;
        }
        const pedidos = await PedidosService.getPedidosByUserId(user.userId);
        if (Array.isArray(pedidos)) {
          const initialOrders = pedidos.map((item) => ({
            ...item,
            status: "Analisando pedido",
            time: "59min",
          }));
          setOrders(initialOrders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos do carrinho:", error);
        setOrders([]);
      }
    };
    handlePedidos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <OrderCard
                key={order.docId}
                order={order}
                isSelected={selectedOrderId === order.docId}
                onClick={handleOrderClick}
              />
            ))
          ) : (
            <p className={styles.emptyKitchenMessage}>
              Nenhum pedido na cozinha no momento.
            </p>
          )}
        </div>
      </main>

      {selectedOrderId && (
        <SelectionFooter onCancel={handleCancel} onEdit={handleEdit} />
      )}

      <footer className={styles.disclaimer}>
        <p>
          Você pode editar ou cancelar seu pedido enquanto ele ainda está na
          fase de preparo.
        </p>
        <p>
          Caso seu pedido já esteja finalizado e você quiser cancelar, será
          cobrada uma taxa de{" "}
          <span className={styles.disclaimerHighlight}>R$50,00</span> — pelo
          tempo e ingredientes.
        </p>
      </footer>

      <Details
        open={isDetailsOpen}
        onClose={handleCloseDetails}
        selectedProduct={productToEdit}
      />
    </div>
  );
}

export default Cozinha;
