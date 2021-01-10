import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyACYphDy0daeDUaziEG5MqNWudwrdstFOU",
  authDomain: "casually-db.firebaseapp.com",
  projectId: "casually-db",
  storageBucket: "casually-db.appspot.com",
  messagingSenderId: "898054751008",
  appId: "1:898054751008:web:eeb87fda5500d2b0818d45",
  measurementId: "G-W51EN3VJGL"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;