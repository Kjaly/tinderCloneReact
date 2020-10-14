import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQr1rpBXeeTM14EuMlkzhgKpfcyt0nq6Q",
    authDomain: "tinder-clone-a9aed.firebaseapp.com",
    databaseURL: "https://tinder-clone-a9aed.firebaseio.com",
    projectId: "tinder-clone-a9aed",
    storageBucket: "tinder-clone-a9aed.appspot.com",
    messagingSenderId: "1093787504109",
    appId: "1:1093787504109:web:ed10c86d6a443da6aaabe4",
    measurementId: "G-P54EDCMPYV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore();

export default database;