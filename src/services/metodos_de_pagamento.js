import { collection, getDocs } from "firebase/firestore";

import { firebaseFirestore } from "../infra/firebase-config";

const getMetodos = async () => {
  let metodos = [];
  try {
    const querySnapshot = await getDocs(
      collection(firebaseFirestore, "metodos_de_pagamento")
    );
    querySnapshot.forEach((doc) => {
      metodos.push({ id: doc.id, ...doc.data() });
    });
  } catch {
    return;
  }
  return metodos;
};

export const MetodosDePagamentoService = { getMetodos };
