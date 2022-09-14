import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCavfs6EVE79sTqT5L4Pklq5C7xoMlI22A",
    authDomain: "rn-spotifyclone.firebaseapp.com",
    projectId: "rn-spotifyclone",
    storageBucket: "rn-spotifyclone.appspot.com",
    messagingSenderId: "83291971284",
    appId: "1:83291971284:web:c1e93556b02b784bd26541",
    measurementId: "G-45E9Y92KC6"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
