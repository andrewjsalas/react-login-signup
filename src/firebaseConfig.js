
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAo1dd44Wp2s_a-k_FlNEz3Mhlw-2xq6Gw",
  authDomain: "react-login-signup-c96ab.firebaseapp.com",
  projectId: "react-login-signup-c96ab",
  storageBucket: "react-login-signup-c96ab.appspot.com",
  messagingSenderId: "89919879389",
  appId: "1:89919879389:web:87579618a1f6e939c04334"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;