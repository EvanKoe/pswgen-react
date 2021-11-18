import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as bcrypt from 'bcryptjs';
import './Secure.css';
import '../index.css';
import NavBar from '../Component/NavBar';

const CryptoJs = require('crypto-js');

const Secure = () => {
  const [input, setInput] = useState('');
  const [isPswSet, setIfPswSet] = useState(false);
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const verify = () => {
    let p = localStorage.getItem('password') as string;
    if (!p)
      setIfPswSet(false);

    if (!isPswSet) {
      let l = CryptoJs.AES.encrypt("validated", input.toString());
      localStorage.setItem('password', l);
      setIfPswSet(true);
      alert('Your password has been set !\nYou won\'t be able to recover it if you forget it !');
      return setInput('');
    } else {
      let l = CryptoJs.AES.decrypt(p, input.toString());
      l = l.toString(CryptoJs.enc.Utf8);

      if (l === 'validated') {
        history.replace('/vault', { input: input });
      } else {
        setMsg('Wrong password. Please try again.');
      }
    }
  };

  useEffect(() => {
    if (isPswSet)
      return setMsg('');
    return setMsg('Please set your master password by typing it in the input field');
  }, [isPswSet]);

  useEffect(() => {
    require('dotenv').config()
    let p = localStorage.getItem('password');

    if (p === undefined || p === null)
      return setIfPswSet(false);
    return setIfPswSet(true);
  }, [])

  return (
    <div>
      <NavBar title='Unlock your vault' active={1} />
      <div className="form">
        <input
          className="input"
          type="password"
          placeholder="Master password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              return verify()
            }
          }}
        />
        <p className="error">{msg}</p>
        <input type='button' onClick={verify} value='Submit' className="button"/>
      </div>
    </div>
  );
};

export default Secure;