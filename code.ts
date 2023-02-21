figma.showUI(__html__);
figma.ui.resize(500, 500);

import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXote8mjCAtk2-O452xFpMSkUTNAF9bz0",
  authDomain: "figma-authentication.firebaseapp.com",
  databaseURL: "https://figma-authentication-default-rtdb.firebaseio.com",
  projectId: "figma-authentication",
  storageBucket: "figma-authentication.appspot.com",
  messagingSenderId: "403845709493",
  appId: "1:403845709493:web:5b0fa3513deaf6fe80c8fc",
};
import {signInWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
figma.ui.onmessage = (msg) => {
  if (msg.type === "Register") {
    console.log("Register now");
    const { user_Email, user_Password } = msg;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user_Email, user_Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  else if(msg.type==='Login'){
    const { user_Email, user_Password } = msg;
    signInWithEmailAndPassword(auth, user_Email, user_Password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  

  figma.closePlugin();
};
