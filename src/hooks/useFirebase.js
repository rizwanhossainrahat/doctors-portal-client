import { useState,useEffect } from "react";
import initializeFirebase from "../Pages/LoginPage/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,getIdToken ,signInWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup,updateProfile   } from "firebase/auth";

initializeFirebase();

const useFirebase=()=>{
        const[user,setUser]=useState({})
        const [isLoading,setisLoading]=useState(true)
        const [authError,setAuthError]=useState('')
        const [admin,setAdmin]=useState(true)
        const [token,setToken]=useState('')

        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();


const registerUser=(email,password,name,navigate)=>{
  setisLoading(true)
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // // ...
        setAuthError('');
        const newUser={email,displayName:name};
        setUser(newUser);
        // save user to the database
          saveUser(email,name,'POST');
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        
        }).catch((error) => {
          
        });
        navigate('/')
      })
      .catch((error) => {
        setAuthError (error.message);
        
      })
      .finally(()=>setisLoading(false));
    
}

const loginUser=(email,password,location,navigate)=>{
  setisLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      // ...
      const destination=location?.state?.from || '/';
      navigate(destination);
      setAuthError('');
    })
    .catch((error) => {
      setAuthError (error.message);
    })
    .finally(()=>setisLoading(false));
}

const signInWithGoogle=(location,navigate)=>{
  setisLoading(true)
  signInWithPopup(auth, googleProvider)
  .then((result) => {  
    const user = result.user;
    saveUser(user.email,user.displayName,'PUT')
   setAuthError('')
   const destination=location?.state?.from || '/';
   navigate(destination);
  }).catch((error) => {
    setAuthError (error.message);
  }).finally(()=>setisLoading(false));
}

// observe user state
useEffect(()=>{
  const unsubcribe=  onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user)
        getIdToken(user)
        .then(idToken=>{
        setToken(idToken)
        })
        } else {
         setUser({})
        }
        setisLoading(false)
      });
      return ()=>unsubcribe;
},[])

useEffect(()=>{
  fetch(`https://quiet-gorge-93820.herokuapp.com/users/${user.email}`)
  .then(res=>res.json())
  .then(data=>setAdmin(data.admin))
},[user.email])

const logout=()=>{
  setisLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=>setisLoading(false));
}

    const saveUser=(email,displayName,method)=>{
        const user={email,displayName};
        fetch('https://quiet-gorge-93820.herokuapp.com/users',{
          method:method,
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(user)
        })
        .then()
    }

        return{
            user,
            admin,
            token,
            registerUser,
            loginUser,
            logout,
            signInWithGoogle,
            authError,
            isLoading,
        }
}

export default useFirebase;