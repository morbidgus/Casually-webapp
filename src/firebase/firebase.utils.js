import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useRef } from 'react';

const config = {
  apiKey: "AIzaSyACYphDy0daeDUaziEG5MqNWudwrdstFOU",
  authDomain: "casually-db.firebaseapp.com",
  projectId: "casually-db",
  storageBucket: "casually-db.appspot.com",
  messagingSenderId: "898054751008",
  appId: "1:898054751008:web:eeb87fda5500d2b0818d45",
  measurementId: "G-W51EN3VJGL"
}
if (!firebase.apps.length) { firebase.initializeApp(config); }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;