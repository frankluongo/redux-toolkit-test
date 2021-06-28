import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Application } from './features/application/Application';
import { SinglePokemon } from './features/singlePokemon/SinglePokemon';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon/:id">
          <SinglePokemon />
        </Route>
        <Route path="/">
          <Application />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
