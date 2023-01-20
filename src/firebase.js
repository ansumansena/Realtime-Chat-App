import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLnLr97FZ6x7b1AKR5dcviltB2Kwe02FY",
  authDomain: "vibechat-9f6c0.firebaseapp.com",
  projectId: "vibechat-9f6c0",
  storageBucket: "vibechat-9f6c0.appspot.com",
  messagingSenderId: "73532345313",
  appId: "1:73532345313:web:6a826216435a0d82b7e0a0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
