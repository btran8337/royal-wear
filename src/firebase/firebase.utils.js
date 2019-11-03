import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAMWqyskC_8Y-NYxuqmzZ-AE3j07jW1fXE',
  authDomain: 'royal-wear.firebaseapp.com',
  databaseURL: 'https://royal-wear.firebaseio.com',
  projectId: 'royal-wear',
  storageBucket: 'royal-wear.appspot.com',
  messagingSenderId: '1078926326233',
  appId: '1:1078926326233:web:a940b39ccebaa5d7e901c8',
  measurementId: 'G-4C9XRREP3T'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
