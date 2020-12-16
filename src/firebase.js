import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC_zZ5vcZNryeKMhIw9KLDqOS1PlJL6YPU",
  authDomain: "facebook-clone-5204a.firebaseapp.com",
  databaseURL: "https://facebook-clone-5204a.firebaseio.com",
  projectId: "facebook-clone-5204a",
  storageBucket: "facebook-clone-5204a.appspot.com",
  messagingSenderId: "388384350957",
  appId: "1:388384350957:web:2f10330c41829fac25e2e4",
  measurementId: "G-WDW1K3NS5F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;