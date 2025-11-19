import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase.config';

const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)


const signup =(email,password)=>{
setLoader(true)
return createUserWithEmailAndPassword(auth,email,password)
}


// login 

const login=(email,password)=>{
  setLoader(true)
  return signInWithEmailAndPassword(auth,email,password)
}


// logout
const logout =()=>{

setLoader(true)
return signOut(auth)

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
    signup,
    login ,
    logout

    



}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
