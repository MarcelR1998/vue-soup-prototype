import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7ZjSxmpOYHw7ftSu4WtmTNgpW9SDYMzU",
    authDomain: "soup-prototype.firebaseapp.com",
    databaseURL: "https://soup-prototype.firebaseio.com",
    projectId: "soup-prototype",
    storageBucket: "soup-prototype.appspot.com",
    messagingSenderId: "268329391992",
    appId: "1:268329391992:web:df63cf139ca843cb619a8d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;