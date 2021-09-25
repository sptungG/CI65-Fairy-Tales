const firebaseConfig = {
  apiKey: "AIzaSyDhvQtxThMzKJrTf1oQ8Hk_-844MTL8sjE",
  authDomain: "fairytalesci65.firebaseapp.com",
  projectId: "fairytalesci65",
  storageBucket: "fairytalesci65.appspot.com",
  messagingSenderId: "1007639374372",
  appId: "1:1007639374372:web:9378da96cd4ebbd3b6c6b1",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Realtime Listener
