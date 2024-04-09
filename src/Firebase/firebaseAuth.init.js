// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxrWjnN2lgGmUaqzQLQPwAzBks0nxMZ08',
  authDomain: 'residential-project-61c72.firebaseapp.com',
  projectId: 'residential-project-61c72',
  storageBucket: 'residential-project-61c72.appspot.com',
  messagingSenderId: '999768942456',
  appId: '1:999768942456:web:1dc0cc8b806a774e528a8d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
