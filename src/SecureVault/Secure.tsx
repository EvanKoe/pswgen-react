import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Secure.css';
import '../index.css';
import NavBar from '../Component/NavBar';
import { isPasswordCorrect, isPasswordSet } from '../Globals/Middlewares';

const CryptoJs = require('crypto-js');

const Secure = ({ location }: any) => {
  const psw = location?.state?.psw;
  const [input, setInput] = useState('');
  const [isPswSet, setIfPswSet] = useState(false);
  const [msg, setMsg] = useState('');
  const history = useHistory();
  const [nbOfAttemps, setNbOfAttemps] = useState(0);
  const [isDisabled, setIfDisabled] = useState(false);

  const verify = () => {
    let awaitTime = 0;

    if (!isPswSet) {
      let l = CryptoJs.AES.encrypt("validated", input.toString());
      localStorage.setItem('password', l);
      localStorage.setItem('pass', CryptoJs.AES.encrypt(JSON.stringify([]), input.toString()));
      setIfPswSet(true);
      alert('Your password has been set !\nYou won\'t be able to recover it if you forget it !');
      return setInput('');
    }
    if (isPasswordCorrect(input.toString())) {
      if (psw === undefined) {
        history.replace('/vault', { input: input });
      } else {
        history.replace('/new', { input: input, gpassword: psw })
      }
    }
    switch (nbOfAttemps) {
      case (2):
        setMsg('3 attemps failed. Wait 20 seconds');
        awaitTime = 20; break;
      case (3):
        setMsg('4 attemps failed. Wait 30 seconds');
        awaitTime = 30; break;
      case (4):
        setMsg('5 attemps failed. Next one will erase your data.');
        awaitTime = 60; break;
      case (5):
        setMsg('Erasing your data...');
        localStorage.clear();
        setIfPswSet(false);
        break;
      default : setMsg('Wrong password. Please try again.');
    }
    if (awaitTime !== 0) {
      setIfDisabled(true);
      setTimeout(() => {
        setIfDisabled(false)
        setMsg('');
      }, awaitTime * 1000);
    }
    setNbOfAttemps(e => e + 1);
    return setInput('');
  };

  useEffect(() => {
    if (isPswSet)
      return setMsg('');
    return setMsg('Please set your master password by typing it in the input field');
  }, [isPswSet]);

  useEffect(() => {
    setIfPswSet(isPasswordSet());
  }, [])

  return (
    <div>
      <NavBar disabled={isDisabled ? 3 : 0} title='Unlock your vault' active={1} />
      <div className="form">
        <input
          className="input"
          type="password"
          placeholder="Master password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isDisabled}
          onKeyDown={(e) => (e.code === 'Enter') && verify()}
        />
        <p className="error">{msg}</p>
        <input
          type='button'
          onClick={verify}
          value='Submit'
          className="button"
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default Secure;