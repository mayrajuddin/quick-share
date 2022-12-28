// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADm8azHJWzD6w9liwpsGhDEKUHXMaFQjc",
    authDomain: "quick-share-ee4c8.firebaseapp.com",
    projectId: "quick-share-ee4c8",
    storageBucket: "quick-share-ee4c8.appspot.com",
    messagingSenderId: "321099348265",
    appId: "1:321099348265:web:665084b245b7deb4001f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app