import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.VITE_APP_apiKey,
    authDomain: import.meta.VITE_APP_authDomain,
    projectId: import.meta.VITE_APP_projectId,
    storageBucket: import.meta.VITE_APP_storageBucket,
    messagingSenderId: import.meta.VITE_APP_messagingSenderId,
    appId: import.meta.VITE_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;