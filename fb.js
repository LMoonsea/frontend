/**
 * Integração com o Firebase
 * By Moonsea
 * MIT License
 **/

/**
 * Configurações so Firebase
 * 
 * IMPORTANTE!
 * Troque os valores de 'firebaseConfig' pelos dados do SEU FIREBASE!
 **/
const firebaseConfig = {
  apiKey: "AIzaSyCyA1T8EZs3ZDQJf3aH2B_Sk80nVYZEkGI",
  authDomain: "frontendeirosbiscoiteiros.firebaseapp.com",
  projectId: "frontendeirosbiscoiteiros",
  storageBucket: "frontendeirosbiscoiteiros.appspot.com",
  messagingSenderId: "869371915548",
  appId: "1:869371915548:web:d6f05042264fe91a70ded9"
};

// Incializa o Firebase
firebase.initializeApp(firebaseConfig);

// Incializa o Firebase Authentication
const auth = firebase.auth();

// Define o provedor de autenticação
var provider = new firebase.auth.GoogleAuthProvider();