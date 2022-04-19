import Registro from './Screens/Registro';
import Home from './Screens/Home';
import './App.css';
import React, { useState,useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import firebaseapp from './firebase/ConfiguracionFirebase';
const auth = getAuth(firebaseapp);


function App() {
  const [user,setUser] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){
      setUser(usuarioFirebase);
    } else{
      setUser(null);
    }
  });
  return <>{user ? <Home /> : <Registro />}</>;



}

export default App;




