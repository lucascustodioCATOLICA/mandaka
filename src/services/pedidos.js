import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import { firebaseFirestore } from "../infra/firebase-config";

const addPedidos = async (item) => {
  await addDoc(collection(firebaseFirestore, "pedidos"), item);
};

const getPedidosByUserId = async (userId) => {
  let pedidos = [];
  try {
    const q = query(
      collection(firebaseFirestore, "pedidos"),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      pedidos.push({ id: doc.id, ...doc.data() });
    });
  } catch {
    return;
  }
  return pedidos;
};

export const PedidosService = { getPedidosByUserId, addPedidos };
