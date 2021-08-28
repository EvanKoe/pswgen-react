import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Generator from './Gen';
import Vault from './Vault';
import Secure from './Secure';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Generator}/>
      <Route exact path="/securevault" component={Secure}/>
      <Route exact path="/vault" component={Vault}/>
    </BrowserRouter>
  );
};

export default App;
