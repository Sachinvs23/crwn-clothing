import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCmQZ4umSbXZRqkCQghd-V8CMVVDctHZyo",
  authDomain: "crwn-db-28d17.firebaseapp.com",
  projectId: "crwn-db-28d17",
  storageBucket: "crwn-db-28d17.appspot.com",
  messagingSenderId: "7602043455",
  appId: "1:7602043455:web:50f277377bcf9083afd68a",
  measurementId: "G-57F2RZLQLV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;