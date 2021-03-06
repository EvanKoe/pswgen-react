import { BrowserRouter, Route } from 'react-router-dom';

import Generator from './Generator/Gen';
import Secure from './SecureVault/Secure';
import Vault from './Vault/Vault';
import New from './NewEntry/New';
import GlobalContextProvider from './Globals/Context';

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter basename="/index.html">
        <Route exact path="/" component={Generator}/>
        <Route exact path="/securevault" component={Secure}/>
        <Route exact path="/vault" component={Vault}/>
        <Route exact path="/new" component={New}/>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;