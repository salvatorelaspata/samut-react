import React, {
  useContext
} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
/* PAGES */
import Home from './pages/Home';
import GestionePazienti from './pages/GestionePazienti';
import Timeline from './pages/Timeline';
import Agenda from './pages/Agenda';
import Paziente from './pages/Paziente';
/* MENU */
import NavigationMenu from './components/navigationMenu/NavigationMenu';
/* FRAMER-MOTION */
import { AnimatePresence } from 'framer-motion';
/* FIREBASE */
// import { FirebaseAuthConsumer, FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseAuthedAnd } from '@react-firebase/auth';

import './App.css'
import AuthProvider, { firebaseAuth } from './auth/AuthProvider';
// import { FirebaseContext, FirebaseProvider } from './auth/FirebaseContext';

// import Login from './auth/Login';
// import { firebase, firebaseConfig, login, loginWithGoogle, register } from './auth/useFirebase'
//firebase.initializeApp(firebaseConfig);



const menuItems = [
  { id: 0, text: "Home", icon: "", path: "/", color: '#FF008C' },
  { id: 1, text: "Gestione", icon: "", path: "/gestione", color: '#D309E1' },
  { id: 2, text: "Timeline", icon: "", path: "/timeline", color: '#9C1AFF' },
  { id: 3, text: "Paziente", icon: "", path: "/paziente", color: '#7700FF' }, //pazienti col float button per inserirne uno nuovo
  { id: 4, text: "Agenda", icon: "", path: "/agenda", color: '#4400FF' },
  { id: 5, text: "Logout", icon: "", path: "/logout", color: '#f3f3f3' }
];

const App = () => {
  // const context = useContext(FirebaseContext)
  // console.log('App: ', context)
  return (
    <>
      {/* <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            console.log(isSignedIn, user, providerId);
          }}
        </FirebaseAuthConsumer>
        <IfFirebaseAuthed>
          {() => ( */}
      <BrowserRouter>
        {/* <FirebaseProvider> */}
        <NavigationMenu items={menuItems} />
        <Route render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route path="/gestione" component={GestionePazienti} />
              <Route path="/timeline" component={Timeline} />
              <Route path="/paziente" component={Paziente} />
              <Route path="/agenda" component={Agenda} />
              <Route path="*">
                <Redirect to="/" />
              </Route>

            </Switch>
          </AnimatePresence>
        )} />

        {/* </FirebaseProvider> */}
      </BrowserRouter>
      {/*  )}
        </IfFirebaseAuthed>
        <Login login={login} loginWithGoogle={loginWithGoogle} register={register} />
      </FirebaseAuthProvider> */}
    </>
  );

}


export default App;
