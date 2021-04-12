import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'
import * as dotenv from 'dotenv';
dotenv.config();
const firebaseConfig = {
     apiKey: dotenv.parse('REACT_APP_API_KEY'),
     authDomain: dotenv.parse('REACT_APP_AUTHDOMAIN'),
     databaseURL: dotenv.parse('REACT_APP_BASEURL'),
     projectId: dotenv.parse('REACT_APP_PROJECT_ID'),
     storageBucket: dotenv.parse('REACT_APP_STORAGEBUCKET'),
     messagingSenderId: dotenv.parse('REACT_APP_MESSAGING_SENDER_ID'),
     appId: dotenv.parse('REACT_APP_APP_ID'),
     measurementId: dotenv.parse('REACT_APP_MEASUREMENT_ID')
};
console.log(firebaseConfig)
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()


export default {
     firebaseConfig
};




/* import firebase from "firebase/app";
import { firebaseConfig } from './firebaseConfig';
firebase.initializeApp(firebaseConfig);

const onAuthStateChange = (callback: Function) => {
     return firebase.auth().onAuthStateChanged(user => {
           if (user) {
               callback({loggedIn: true, email: user.email});
          } else {
               callback({loggedIn: false});
          }
     });
}

const register = (username:string, password:string) => {
     return new Promise<firebase.User | null>((resolve, reject) => {
          firebase.auth().createUserWithEmailAndPassword(username, password)
          .then((userCredential) => resolve(userCredential.user))
          .catch((error) => reject(error));
     })
}
   
const login = (username:string, password:string) => {
     return new Promise<firebase.User | null>((resolve, reject) => {
          firebase
          .auth()
          .signInWithEmailAndPassword(username, password)
          .then((userCredential) => resolve(userCredential.user))
          .catch(error => reject(error));
     });
}

const loginWithGoogle = () =>{
     return new Promise<void>((resolve, reject) => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider)
          .then(() => resolve())
          .catch(error => reject(error));
     })
     
}

const logout = () => {
     firebase.auth().signOut();
}

export {
     firebase,
     firebaseConfig,
     logout,
     register,
     login,
     loginWithGoogle,
     onAuthStateChange
} 

export default firebase; */