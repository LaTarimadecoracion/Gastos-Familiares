// Firebase client configuration (compat-friendly)
// This file is loaded as a plain <script> (no type="module") from index.html
// `app.js` expects `window.firebaseConfig` and `window.FIREBASE_ENABLED`.

window.FIREBASE_ENABLED = true; // Activa la integración de Firebase en la app

window.firebaseConfig = {
  apiKey: "AIzaSyAX-Dq0wBcOmDG_G1Vso1VTCzedvmi4EmQ",
  authDomain: "gastos-84a95.firebaseapp.com",
  projectId: "gastos-84a95",
  storageBucket: "gastos-84a95.appspot.com",
  messagingSenderId: "296681422203",
  appId: "1:296681422203:web:e17b7e83e028865c6611de",
  measurementId: "G-C3R0FZPGVX"
};

// Nota: No inicializamos Firebase aquí porque `app.js` usa la versión compat
// y hace `firebase.initializeApp(window.firebaseConfig)` cuando corresponda.