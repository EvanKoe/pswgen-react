import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as GenImg } from '../assets/gen.svg';
import { ReactComponent as VaultImg } from '../assets/vault.svg';

const NavBar = () => {
  const history = useHistory();

  return (
    <div className="navbar">
      <GenImg
        className="nav active"
      />
      <p className="title">Password generator</p>
      <VaultImg
        className="nav"
        onClick={() => history.replace('/securevault')}
      />
    </div>
  );
};

export default NavBar;