const firebaseConfig = {
    apiKey: "AIzaSyDwtE8KXaEj9Nt8aB5TYtjZrwkPIKLY26M",
    authDomain: "web-manga-85b6f.firebaseapp.com",
    databaseURL: "https://web-manga-85b6f-default-rtdb.firebaseio.com",
    projectId: "web-manga-85b6f",
    storageBucket: "web-manga-85b6f.appspot.com",
    messagingSenderId: "201487929776",
    appId: "1:201487929776:web:c01fdba57d4e6d27d24675"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();