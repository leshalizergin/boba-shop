// firebase-init.js
// 1. Классические SDK
// (уже подключаются в admin.html)
// 2. Инициализация:
firebase.initializeApp({
  apiKey: "ВАШ_API_KEY",
  authDomain: "ВАШ_PROJECT_ID.firebaseapp.com",
  projectId: "ВАШ_PROJECT_ID",
  // …остальные поля из вашей консоли Firebase
});

// 3. Глобальные переменные
window.auth = firebase.auth();
window.db   = firebase.firestore();