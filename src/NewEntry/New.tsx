import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import './New.css';

import { ReactComponent as BackBtn } from '../assets/back.svg';
import { ReactComponent as EyeBtn } from '../assets/eye.svg';
import { ReactComponent as NoEyeBtn } from '../assets/no_eye.svg';

const CryptoJs = require("crypto-js");

//! TODO - Patch crash
//! When saving generated password from Gen
//! save doesn't work, doesn't go back to
//! vault and crashes ("cannot read property
//! '0' of undefined")
interface LocaState {
  props: {
    gname: string;
    gusername: string;
    gpassword: string;
    psw: string;
  };
};

const New = ({ location }: any) => {
  const history = useHistory()
  let props = location?.state;
  const psw = props?.psw;
  const [name, setName] = useState<string>(props?.gname ? props.gname : '');
  const [username, setUsername] = useState<string>(props?.gusername ? props.gusername : '');
  const [password, setPassword] = useState<string>(props?.gpassword ? props.gpassword : '');
  const [isPwsViewable, setIfPwsViewable] = useState(false);
  const saveName = props?.gname ? props.gname : undefined;
  const [msg, setMsg] = useState<string | undefined>(undefined);

  const fieldEmpty = ({ name, username, password }: any) => {
    if (name === '' || username === '' || password === '')
      return true;
    else if (!name || !username || !password)
      return true;
    return false;
  }

  const save = () => {
    let obj = { name, username, password };
    let p = localStorage.getItem('pass') as any;
    if (p) {
      p = CryptoJs.AES.decrypt(p, psw);
      p = JSON.parse(p.toString(CryptoJs.enc.Utf8));
    }
    if (fieldEmpty(obj))
      return setMsg('Please fill all the fields')

    if (!props.gusername && !props.gpassword && !props.gname) {
      let o = obj;
      if (p !== null) {
        p.push(o);
        p = CryptoJs.AES.encrypt(JSON.stringify(p), psw).toString();
      } else
        p = CryptoJs.AES.encrypt(JSON.stringify([o]), psw).toString();
    } else {
      let i = 0;
      for (i; p && p[i]; ++i) {
        if (p[i].name === saveName) {
          break ;
        }
      }
      p[i] = obj;
      p = CryptoJs.AES.encrypt(JSON.stringify(p), psw).toString();
    }
    localStorage.setItem('pass', p);
    return history.replace('/vault', {input: psw});
  }

  return (
    <div style={{ backgroundColor: '#212121', height: '100vh' }}>
      {/* Navigation bar */}
      <div className='navbar'>
        <BackBtn
          className='nav'
          onClick={() => {
            if (props.gpassword !== undefined && props.gname === undefined) {
              history.replace('/');
            } else {
              history.replace('/vault', { input: psw })
            }
          }}
        />
        <p className='title'>{ saveName === undefined ? 'Create new' : 'Modify' }</p>
      </div>

      {/* Form */}
      <div className='mainn'>
        <p className='titlen'>{ saveName === undefined ? 'New password' : 'Edit password' }</p>
        <div className='inputn'>
          <input
            type='text'
            value={name}
            placeholder='Name'
            className='tinputn'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='inputn'>
          <input
            type='text'
            value={username}
            placeholder='Username or email adress'
            className='tinputn'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }} className='inputn'>
          <input
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