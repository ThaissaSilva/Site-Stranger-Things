// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfkK4UyBJFv1MNaMeR2b9GyyI4YK_8Brg",
    authDomain: "projeto-semana-front-end-minv.firebaseapp.com",
    projectId: "projeto-semana-front-end-minv",
    storageBucket: "projeto-semana-front-end-minv.appspot.com",
    messagingSenderId: "484376961443",
    appId: "1:484376961443:web:10bae069d0543bf98f7a16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;