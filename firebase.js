import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB_pwAtlsX1f-_ntTcnautcW2r3kmSXWTI",
    authDomain: "boba-shop-7f26f.firebaseapp.com",
    projectId: "boba-shop-7f26f",
    storageBucket: "boba-shop-7f26f.firebasestorage.app",
    messagingSenderId: "110850067235",
    appId: "1:110850067235:web:a7f8df33baf328b38f9a96"
  };

  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
  window.db = getFirestore(app);
