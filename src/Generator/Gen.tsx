import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Gen.css';
import NavBar from '../Component/NavBar';

const ns = '0123456789,;:=?./+ù%^$*][}{)(-_';
const n = '0123456789';
const na = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nas = 'abcdefghijklmnopqrstuvwxyz0123456789,;:=?./+ù%^$*][}{)(-_ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const ftoi = (a: number) => {
  return a | 0
}

const Generator = () => {
  const history = useHistory();
  const [password, setPassword] = useState('Your password !');
  const [isAlpha, setIfAlpha] = useState(true);
  const [isSpec, setIfSpec] = useState(true);
  const [len, setLen] = useState(12);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState('');

  const gen = () => {
    let res = [];
    let list = undefined;

    if (isAlpha)
      list = (isSpec ? nas : na)
    else
      list = (isSpec ? ns : n)

    for (let i = 0; i < len; ++i) {
      let n = ftoi(Math.random() * (list.length - 1))
      res.push(list[n]);
    }
    setError('')
    setCopied('')
    return setPassword(res.join(''));
  }

  const setL = (value: number) => {
    if (value < 8)
      return setError('Length cannot be under 8 !')
    else if (value > 30)
      return setError('Length can be up to 30 !')
    setError('')
    return setLen(value);
  }

  const toClip = () => {
    if (password === 'Your password !')
      return setError('Generate a password before copying it !')
    navigator.clipboard.writeText(password)
    setCopied('Password copied in your clipboard !')
  }

  const save = () => {
    history.replace('/new', { psw: password });
  }

  return (
    <div className="App">
      <NavBar />  {/* send title props */}
      <div className="pswDiv">
        <p
          className="rowDiv psw"
        >{password}</p>
        <img
          className="rowDiv img"
          alt="Copy"
          src="https://img.icons8.com/material-outlined/48/000000/copy.png"
          onClick={toClip}
          height={20}
          width={20}
        />
      </div>
      <p className="errorMsg">{error}</p>
      <p
        className="errorMsg copied"
      >{copied}</p>
      <div>
        <p
          className="rowDiv psw"
        > Length : </p>
        <input
          type="button"
          onClick={() => setL(len - 1)}
          value='-'
          className="button rowDiv size30"
          style={{ padding: '10px 15px', marginLeft: 5 }}
        />
        <p
          className="rowDiv size30 textCol"
        >{len}</p>
        <input
          type="button"
          onClick={() => setL(len + 1)}
          value='+'
          className="button rowDiv size30"
          style={{ padding: '10px 15px' }}
        />
      </div>
      <div>
        <div className='optionDiv'>
          <p className="rowDiv check"> Include Letters </p>
          <input
            type="checkbox"
            checked={isAlpha}
            onChange={(state) => setIfAlpha(a => !a)}
            className="rowDiv checkboxes"
          />
        </div>
        <div className='optionDiv'>
          <p className="rowDiv check"> Include special characters </p>
          <input
            type="checkbox"
            checked={isSpec}
            onChange={(state) => setIfSpec(a => !a)}
            className="rowDiv checkboxes"
          />
        </div>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <input
          type="button"
          value="Generate"
          onClick={gen}
          className="button genBtn"
        />
        <input
          type="button"
          value="Save"
          onClick={() => alert('This feature doesn\'t work at the moment')}
          className="button genBtn"
        />
        <input
          type='button'
          onClick={() => localStorage.clear()}
          value='Clear'
          className='button genBtn'
        />
      </div>
    </div>
  );
};

export default Generator;
