import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as GenImg } from '../assets/gen.svg';
import { ReactComponent as VaultImg } from '../assets/vault.svg';

const NavBar = ({
  title = 'Title',
  active = 0,
  disabled = 0  // 0: none, 1: GenImg, 2: VaultImg, 3: both
}) => {
  const history = useHistory();

  return (
    <div className="navbar">
      <GenImg
        className={
          disabled === 1 || disabled === 3 ? 'disabledNav' :
            active === 0 ? 'nav active' : 'nav'
        }
        onClick={() => {
          if (disabled !== 1 && disabled !== 3) {
            history.replace('/')
          }
        }}
      />
      <p className="title">{ title }</p>
      <VaultImg
        className={
          disabled > 1 ? 'disabledNav' : active === 1 ? 'nav active' : 'nav'
        }
        onClick={() => {
          if (disabled !== 2 && disabled !== 3) {
            history.replace('/securevault')
          }
        }}
      />
    </div>
  );
};

export default NavBar;