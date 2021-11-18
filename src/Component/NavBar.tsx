import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as GenImg } from '../assets/gen.svg';
import { ReactComponent as VaultImg } from '../assets/vault.svg';

const NavBar = ({ title = 'Title', active = 0 }) => {
  const history = useHistory();

  return (
    <div className="navbar">
      <GenImg
        className={active === 0 ? 'nav active' : 'nav'}
        onClick={() => history.replace('/')}
      />
      <p className="title">{ title }</p>
      <VaultImg
        className={active === 1 ? 'nav active' : 'nav'}
        onClick={() => history.replace('/securevault')}
      />
    </div>
  );
};

export default NavBar;