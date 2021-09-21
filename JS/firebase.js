// const firebaseConfig = {
//   apiKey: "AIzaSyDhvQtxThMzKJrTf1oQ8Hk_-844MTL8sjE",
//   authDomain: "fairytalesci65.firebaseapp.com",
//   projectId: "fairytalesci65",
//   storageBucket: "fairytalesci65.appspot.com",
//   messagingSenderId: "1007639374372",
//   appId: "1:1007639374372:web:9378da96cd4ebbd3b6c6b1",
// };
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
const auth = firebaseApp.auth();