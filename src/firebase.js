import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyB1sn9TPDa49lqbIIMo28JXRNPPbcgeilQ",
  authDomain: "slack-clone-accca.firebaseapp.com",
  projectId: "slack-clone-accca",
  storageBucket: "slack-clone-accca.appspot.com",
  messagingSenderId: "117448468213",
  appId: "1:117448468213:web:845fb5248604d298a707bc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };