import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlwv80MKYKlQ2gI8aJiVGAZkRBSxaj-O8",
  authDomain: "my-final-project-6ec8c.firebaseapp.com",
  projectId: "my-final-project-6ec8c",
  storageBucket: "my-final-project-6ec8c.appspot.com",
  messagingSenderId: "1003534330509",
  appId: "1:1003534330509:web:303cf4e9663dd8f3dd50c4"
};


const firebaseapp = initializeApp(firebaseConfig);


export default firebaseapp