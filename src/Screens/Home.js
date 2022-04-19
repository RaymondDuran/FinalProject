import firebaseapp from '../firebase/ConfiguracionFirebase';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import Registro from './Registro';
import { getFirestore, doc , setDoc } from "firebase/firestore"
const auth = getAuth(firebaseapp);
const firestore = getFirestore(firebaseapp);



function Home() {


    return <div>Home
        <label>Comentarios
        <textarea class="form-control" id="comment" name="comment" aria-required="true" cols="45" rows="14"></textarea>
        
        


        </label>
        <button onClick = {() => signOut(auth)}> Cerrar Sesión </button>
        
    </div>
}

export default Home;