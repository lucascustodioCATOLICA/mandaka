import { addDoc, collection, getDocs } from "firebase/firestore";

import { firebaseFirestore } from "../infra/firebase-config";

const addPedidos = async (item) => {
  await addDoc(collection(firebaseFirestore, "pedidos"), item);
};

const getPedidos = async () => {
  let pedidos = [];
  try {
    const querySnapshot = await getDocs(
      collection(firebaseFirestore, "pedidos")
    );
    querySnapshot.forEach((doc) => {
      pedidos.push({ id: doc.id, ...doc.data() });
    });
  } catch {
    return;
  }
  return pedidos;
};

export const PedidosService = { getPedidos, addPedidos };
