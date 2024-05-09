import firebase from 'firebase/compat/app';
import 'firebase/auth';
 export const firebaseConfig = {
    apiKey: "AIzaSyD5JEsqirX47uKKTEN3RP6B3Bw4xv7S_pc",
    authDomain: "test-auth-493ec.firebaseapp.com",
    projectId: "test-auth-493ec",
    storageBucket: "test-auth-493ec.appspot.com",
    messagingSenderId: "294423764561",
    appId: "1:294423764561:web:e7abbf5f30f3276c2b6270"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
