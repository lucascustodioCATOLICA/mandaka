import { collection, getDocs } from "firebase/firestore";

import { firebaseFirestore } from "../infra/firebase-config";

const getPratos = async () => {
  let pratos = [];
  try {
    const querySnapshot = await getDocs(
      collection(firebaseFirestore, "pratos")
    );
    querySnapshot.forEach((doc) => {
      pratos.push({ id: doc.id, ...doc.data() });
    });
  } catch {
    return;
  }
  return pratos;
};

export const PratosService = { getPratos };
