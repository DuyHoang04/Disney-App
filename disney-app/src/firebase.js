import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCff1gMJW1n_4uKEZvrULBcYO56Eiom8JA",
  authDomain: "disney-812a6.firebaseapp.com",
  projectId: "disney-812a6",
  storageBucket: "disney-812a6.appspot.com",
  messagingSenderId: "119287908571",
  appId: "1:119287908571:web:b4139e2f44fde91e2e24fe",
  measurementId: "G-FTD9SH44EF",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
