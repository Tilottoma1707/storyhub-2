import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyA6Y-yQH_qunyhJv_U91YYCF_j6xnpy83U",
    authDomain: "story-database-c3fe4.firebaseapp.com",
    projectId: "story-database-c3fe4",
    storageBucket: "story-database-c3fe4.appspot.com",
    messagingSenderId: "950976279449",
    appId: "1:950976279449:web:23f048ceca5d4322d25908"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();