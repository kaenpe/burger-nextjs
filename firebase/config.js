import 'firebase/analytics';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBquuq6T7fArAJKuibdDxGTEkw9MGE9hks',
  authDomain: 'burger-next.firebaseapp.com',
  databaseURL: 'https://burger-next.firebaseio.com',
  projectId: 'burger-next',
  storageBucket: 'burger-next.appspot.com',
  messagingSenderId: '702237149434',
  appId: '1:702237149434:web:872af8c334079ce46ce143',
  measurementId: 'G-L4LS1VF028',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
