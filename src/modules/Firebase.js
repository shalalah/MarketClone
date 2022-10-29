import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvj14uAzIBgAz1VjIwJk3_oIffg-01kDQ",
    authDomain: "user-b7953.firebaseapp.com",
    projectId: "user-b7953",
    storageBucket: "user-b7953.appspot.com",
    messagingSenderId: "377074187531",
    appId: "1:377074187531:web:3772dc2d1933d4ec3bb60e",
};

//initialize firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
// export default app;
