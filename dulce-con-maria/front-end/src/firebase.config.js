// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWjbSNQhuRj97wT5YWbtLyv6uh6XYBQqI",
  authDomain: "dulceconmaria-1cc5b.firebaseapp.com",
  projectId: "dulceconmaria-1cc5b",
  storageBucket: "dulceconmaria-1cc5b.appspot.com",
  messagingSenderId: "606734528786",
  appId: "1:606734528786:web:8ef3bf825d8fbf196943cb",
  measurementId: "G-TVJ74CXDTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);