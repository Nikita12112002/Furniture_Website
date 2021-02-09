
import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRd_6MAm7Xfu-yvi2qd3_a8-2iLRGC2Ts",
  authDomain: "reactapp-ad73b.firebaseapp.com",
  databaseURL: "https://reactapp-ad73b.firebaseio.com",
  projectId: "reactapp-ad73b",
  storageBucket: "reactapp-ad73b.appspot.com",
  messagingSenderId: "957813754724",
  appId: "1:957813754724:web:3626649edc9292cd04c871",
  measurementId: "G-J9XX80FT0K"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider= new firebase.auth.GoogleAuthProvider();

export { db, auth, storage ,provider };