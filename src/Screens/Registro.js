import firebaseapp from '../firebase/ConfiguracionFirebase';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { getFirestore, doc , setDoc } from "firebase/firestore"
const auth = getAuth(firebaseapp);
const firestore = getFirestore(firebaseapp);

function Registro() {
    const[registrando,setRegistrando] = useState(false);


    async function registrarUsuario(email,password,nombre,apellido){
        const informacionUsuario = await createUserWithEmailAndPassword(
            auth,
            email,
            password
            ).then((usuarioFirebase) => 
            {return usuarioFirebase});

        console.log(informacionUsuario.user.uid);
        const docuRef =  doc(firestore, `usuarios/${informacionUsuario.user.uid}`)
        setDoc(docuRef, {email: email, nombre:nombre, apellido:apellido});

    }


    function submitHandler (event) {
        event.preventDefault();

        const nombre = event.target.nombre.value;
        const apellido = event.target.apellido.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log("submit", nombre, apellido, email, password);

        if(registrando){
            
            //Registrar Cuenta
            registrarUsuario(email,password,nombre,apellido);

        }else{
            //Login Cuenta
            signInWithEmailAndPassword(auth,email,password)
        }

    }

    return(
    <div>
    <h1>{registrando ? "Regístrate" : "Inicia Sesión"}</h1>
<form on onSubmit={submitHandler}>
    <label>
        Nombre: 
        <input type="text"  id="nombre"/>
    </label>

    <label>
        Apellido: 
        <input type="text" id="apellido" />
    </label>

    <label>
       Correo electrónico: 
       <input type="email" id="email" /> 
    </label>

    <label>
        Contraseña: 
        <input type="password" id="password" />
    </label>

    <label>
        <input
        type="submit"
        value ={registrando ? "Registrar" : "Iniciar Sesión"} 
        />
        
    </label>


</form>

    <button onClick={() => setRegistrando(!registrando)}>
        {registrando ? "Ya tengo una cuenta" : "Registrate"}
    </button>

    </div>
);
}

export default Registro;