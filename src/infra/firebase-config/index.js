import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCH6ejUg9rYKGA4rUF1zIPzfa50b5zoJRg",
  authDomain: "mandaka-d0d90.firebaseapp.com",
  projectId: "mandaka-d0d90",
  storageBucket: "mandaka-d0d90.firebasestorage.app",
  messagingSenderId: "845539955978",
  appId: "1:845539955978:web:754e964d0cdf34482456f3",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseFirestore = getFirestore(firebaseApp);
