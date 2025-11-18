import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import auth from '../../firebase.config';

const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)


const createUser =(email,password)=>{

setLoader(true)
const newUser = createUserWithEmailAndPassword(auth,email,password)
return newUser

}

useEffect(()=>{

const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{

    setUser(currentUser)
    setLoader(false)
})

return ()=>unSubscribe()

},[])



const authInfo ={

    user,
    loader,
    createUser,
    setUser ,



}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
