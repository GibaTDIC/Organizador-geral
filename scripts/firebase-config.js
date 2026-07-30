// Prof GB — Inicialização única do Firebase.
// Antes cada página chamava initializeApp/getAuth/getFirestore com o mesmo
// firebaseConfig copiado 4 vezes. Agora existe uma só fonte.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBnwbnCSPLH8yjkYrgLgK5Q8g1Q8RoDz1s",
    authDomain: "sistema-edf.firebaseapp.com",
    databaseURL: "https://sistema-edf-default-rtdb.firebaseio.com",
    projectId: "sistema-edf",
    storageBucket: "sistema-edf.firebasestorage.app",
    messagingSenderId: "1021164434404",
    appId: "1:1021164434404:web:768123da370f7f56cc0df1",
    measurementId: "G-WDH195N955"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
