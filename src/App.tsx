import { BrowserRouter, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Generator = lazy(() => import('./Generator/Gen'));
const Vault = lazy(() => import('./Vault/Vault'));
const Secure = lazy(() => import('./SecureVault/Secure'));
const New = lazy(() => import('./NewEntry/New'));

const App = () => {
  return (
    <BrowserRouter basename="/index.html">
      <Suspense fallback={<p>Loading...</p>}>
        <Route exact path="/" component={Generator}/>
        <Route exact path="/securevault" component={Secure}/>
        <Route exact path="/vault" component={Vault}/>
        <Route exact path="/new" component={New}/>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;