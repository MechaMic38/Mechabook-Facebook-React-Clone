import firebase from "firebase";
const { firebaseApiKey } = require("./keys");

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "mecha-book.firebaseapp.com",
  databaseURL: "https://mecha-book.firebaseio.com",
  projectId: "mecha-book",
  storageBucket: "mecha-book.appspot.com",
  messagingSenderId: "741087410971",
  appId: "1:741087410971:web:0b5ca8554600842872f1be",
  measurementId: "G-K4P257DZ1B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
