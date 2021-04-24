import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAf663vMY4jrejUOtRS2LS31OrtKKpVgtM",
    authDomain: "manoj-picgram.firebaseapp.com",
    projectId: "manoj-picgram",
    storageBucket: "manoj-picgram.appspot.com",
    messagingSenderId: "629786149251",
    appId: "1:629786149251:web:58f102bf7a1057ce8df6b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };