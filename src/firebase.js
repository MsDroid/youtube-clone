import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBqG1QNbC8jgwYnYCqAfVrb9MVOHTcwuU4",
  authDomain: "vlogo-dc5e9.firebaseapp.com",
  projectId: "vlogo-dc5e9",
  storageBucket: "vlogo-dc5e9.appspot.com",
  messagingSenderId: "956197588512",
  appId: "1:956197588512:web:ae0b9b37cb80bbbcad7645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;