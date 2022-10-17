import firebase from 'firebase'
//require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD2QlXETN86MExNuVqGVQLEyXxrJb7h4QM",
  authDomain: "complaint-forum-70e3f.firebaseapp.com",
  projectId: "complaint-forum-70e3f",
  storageBucket: "complaint-forum-70e3f.appspot.com",
  messagingSenderId: "164263466578",
  appId: "1:164263466578:web:952ad2133996c08209b18b"
};

  if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
  export default firebase.firestore()

