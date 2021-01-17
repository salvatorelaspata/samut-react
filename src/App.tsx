import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationMenu from './components/NavigationMenu';
import Agenda from './pages/Agenda';
import Document from './pages/Document';
import Upload from './pages/Upload';
import Home from './pages/Home';
import Visite from './pages/Visite';

const App = () => {
  const items = [
    { id: 1, title: "Upload", icon: "", path: "/upload" },
    { id: 2, title: "Paziente", icon: "", path: "/doc" }/* ,
    { id: 3, title: "Visite", icon: "", path: "/visite" },
    { id: 4, title: "Agenda", icon: "", path: "/agenda" } */
  ];
  return (
    <>
      <BrowserRouter>
        <NavigationMenu
          items={items}
          onMouseOver={() => console.log('onMouseOver')}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/upload">
            <Upload />
          </Route>

          <Route path="/doc">
            <Document />
          </Route>

          <Route path="/visite">
            <Visite />
          </Route>

          <Route path="/agenda">
            <Agenda />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}


export default App;
