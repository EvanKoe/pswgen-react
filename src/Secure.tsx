import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Secure.css';
import * as bcrypt from 'bcryptjs';

const Secure = () => {
  const [input, setInput] = useState('');
  const [isPswSet, setIfPswSet] = useState(false);
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const verify = () => {
    let p = localStorage.getItem('password') as string;

    if (!isPswSet) {
      bcrypt.hash(input, 0, (err: any, hash: string) => {
        if (err) {
          alert(err);
          return setMsg('Error setting your password');
        }
        return localStorage.setItem('password', hash);
      });
    } else {
      bcrypt.compare(input, p, (err: any, result: boolean) => {
        if (err) {
          console.log(err);
          return setMsg('Server error')
        } else if (result)
          history.push('/vault');
        else
          setMsg('Wrong password !');
      });
    }
  };

  useEffect(() => {
    require('dotenv').config()
    let p = localStorage.getItem('password');

    if (p === undefined || p === null) {
      setIfPswSet(false);
      return setMsg('Please set your Master Password !');
    }
    // localStorage.clear();
    return setIfPswSet(true);
  }, [])

  return (
    <>
      <div className="navbar">
        <img
          className="nav"
          alt="Password generator"
          src="https://img.icons8.com/ios/50/000000/password--v1.png"
          onClick={() => history.push('/')}
        />
        <p className="title">Your vault</p>
        <img
          className="nav active"
          alt="Your vault"
          src="https://img.icons8.com/pastel-glyph/50/000000/safe--v2.png"
        />
      </div>
      <form onSubmit={verify} className="form">
        <input
          className="input"
          type="password"
          placeholder="Master password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="error">{msg}</p>
        <input type="submit" className="button"/>
      </form>
    </>
  );
};

export default Secure;