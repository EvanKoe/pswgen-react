import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './New.css';

import { ReactComponent as BackBtn } from '../assets/back.svg';
import { ReactComponent as EyeBtn } from '../assets/eye.svg';
import { ReactComponent as NoEyeBtn } from '../assets/no_eye.svg';
import { getPasswords } from '../Globals/Middlewares';
import { globales } from '../Globals/Context';

const CryptoJs = require("crypto-js");

interface LocaState {
  location: {
    state: {
      gname: string;            // actual name for edit
      gusername: string;        // actual username for edit
      gpassword: string;        // actual password for edit | password from generator
      isEditing?: boolean       // does it edit or does it make a new entry ?
    }
  }
};

const New = ({ location }: LocaState) => {
  const history = useHistory()
  const context = useContext(globales);
  let props = location?.state;
  const doesEdit = props?.isEditing ? props.isEditing : false;
  const input = context?.master;
  const [name, setName] = useState<string>(props?.gname ? props.gname : '');
  const [username, setUsername] = useState<string>(props?.gusername ? props.gusername : '');
  const [password, setPassword] = useState<string>(props?.gpassword ? props.gpassword : '');
  const [isPwsViewable, setIfPwsViewable] = useState(false);
  const saveName = props?.gname ? props.gname : undefined;
  const [msg, setMsg] = useState<string | undefined>(undefined);

  const save = () => {
    let obj = { name, username, password};
    let p = localStorage.getItem('pass') as any;

    try {
      p = getPasswords(input ? input : '');
    } catch (e) {
      console.log(e);
      return setMsg('Error: unable to get your passwords. Please try again.');
    }

    if (!doesEdit) { // if new entry
      if (p === null)
        p = [];
      p.push(obj);
      p = CryptoJs.AES.encrypt(JSON.stringify(p), input).toString();
    } else {  // if edit
      let i = 0;
      for (i; p && p[i]; ++i) {
        if (p[i].name === saveName) {
          break ;
        }
      }
      p[i] = obj;
      p = CryptoJs.AES.encrypt(JSON.stringify(p), input).toString();
    }
    localStorage.setItem('pass', p);
    return history.replace('/vault', { input: input });
  }

  return (
    <div style={{ backgroundColor: '#212121', height: '100vh' }}>
      {/* Navigation bar */}
      <div className='navbar'>
        <BackBtn
          className='nav'
          onClick={() => {
            let a = (props.gpassword !== undefined && props.gname === undefined);
            history.replace(
              a ? '/' : '/vault',
              a ? {} : { input }
            );
          }}
        />
        <p className='title'>{ saveName === undefined ? 'Create new' : 'Modify' }</p>
      </div>

      {/* Form */}
      <div className='mainn'>
        <p className='titlen'>{ saveName === undefined ? 'New password' : 'Edit password' }</p>
        <div className='inputn'>
          <input
            required
            type='text'
            value={name}
            placeholder='Name'
            className='tinputn'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='inputn'>
          <input
            required
            type='text'
            value={username}
            placeholder='Username or email adress'
            className='tinputn'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }} className='inputn'>
          <input
            required
            type='text'
            value={password && (isPwsViewable ? password : '*'.repeat(password.length))}
            onKeyDown={(e) => {
              if (e.keyCode === 8) { // if backspace
                return setPassword(str => str.slice(0, -1));
              } if (e.keyCode === 13) { // if Enter
                return save();
              } if (e.key.length === 1) {
                return setPassword(p => p.concat(e.key));
              }
            }}
            placeholder='Password'
            className='tinputn'
          />
          { isPwsViewable ? (
            <NoEyeBtn
              className='viewBtn'
              onClick={() => setIfPwsViewable(e => !e)}
            />
          ) : (
            <EyeBtn
              className='viewBtn'
              onClick={() => setIfPwsViewable(e => !e)}
            />
          ) }
        </div>
        <div className='horizontal' style={{ backgroundColor: '#212121' }}>
          <p className='errorMsg'>{ msg ? msg : '' }</p>
          <input
            type='button'
            className='button'
            style={{ float: 'right', marginRight: 16, width: '50%' }}
            onClick={save}
            value='Save'
          />
        </div>
      </div>
    </div>
  )
}

export default New;