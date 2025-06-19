import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

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
      pedidos.push({ docId: doc.id, ...doc.data() });
    });
  } catch {
    return;
  }
  return pedidos;
};

const deletePedidoById = async (id) => {
  const docRef = doc(firebaseFirestore, "pedidos", id);
  await deleteDoc(docRef);
};

const editPedidoById = async (id, data) => {
  const docRef = doc(firebaseFirestore, "pedidos", id);
  await updateDoc(docRef, data);
};

export const PedidosService = {
  getPedidosByUserId,
  addPedidos,
  deletePedidoById,
  editPedidoById,
};
