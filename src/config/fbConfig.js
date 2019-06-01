import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD9fx238lutTNoowMejTuDfoAi1Yk9pFxY",
    authDomain: "mario-plan-lac-tran.firebaseapp.com",
    databaseURL: "https://mario-plan-lac-tran.firebaseio.com",
    projectId: "mario-plan-lac-tran",
    storageBucket: "mario-plan-lac-tran.appspot.com",
    messagingSenderId: "1035562027253",
    appId: "1:1035562027253:web:fe022a686890b4b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({});

export default firebase;