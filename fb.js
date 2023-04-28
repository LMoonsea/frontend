/**
 * Integração com o Firebase.com
 * By Moonsea
 * MIT License
 **/

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyA1T8EZs3ZDQJf3aH2B_Sk80nVYZEkGI",
  authDomain: "frontendeirosbiscoiteiros.firebaseapp.com",
  projectId: "frontendeirosbiscoiteiros",
  storageBucket: "frontendeirosbiscoiteiros.appspot.com",
  messagingSenderId: "869371915548",
  appId: "1:869371915548:web:d6f05042264fe91a70ded9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Importa o "core" do Firebase.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

// Importa o Authentication do Firebase.
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithRedirect,  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// Initializa o Firebase.
const fbapp = initializeApp(firebaseConfig);

// Especifica o provedor de autenticação.
const provider = new GoogleAuthProvider();

// Inicializa o mecanismo de autenticação.
const auth = getAuth();

// signInWithPopup(auth, provider)


// Observa o status de autenticação do usuário.

onAuthStateChanged(auth, (user) => {
    if (user) {
        sessionStorage.userData = JSON.stringify({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
            created: user.metadata.createdAt,
            lastLogin: user.metadata.lastLoginAt 
        })
    } else {
        delete sessionStorage.userData
    }
});
// Executa a jQuery quando o documento estiver pronto
$(document).ready(myFirebase)


function myFirebase() {

    // Detecta cliques no botão de login.
    $('#navUser').click(login)
}

function login() {
// Se o usuario não está logado faz login usando popup.
    if (!sessionStorage.userData) {
        signInWithPopup(auth, provider)
        
        // Se logou corretamente.    
        .then(() => {
            
            // Redireciona para a 'home'.    
            location.href = '/home'
            })
            // Se está logado...
    } else
        
    // Redireciona para 'profile.
    location.href = '/profile'
}

