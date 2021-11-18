import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Gen.css';
import NavBar from '../Component/NavBar';
import { ReactComponent as DecBtn } from '../assets/decrease.svg';
import { ReactComponent as IncBtn } from '../assets/increase.svg';
import { ReactComponent as CopyBtn } from '../assets/copy.svg';

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
      <NavBar title='Password Generator' active={0} />  {/* send title props */}
      <div className="pswDiv">
        <p className="rowDiv psw noMarginBlock">{ password }</p>
        <CopyBtn
          className="rowDiv img"
          onClick={toClip}
          height={20}
          width={20}
        />
      </div>
      <p className="errorMsg">{ error }</p>
      <p className="errorMsg copied">{ copied }</p>
      <div className='optionDiv'>
        <p className="rowDiv check">Length :</p>
        <div className='rowDiv checkboxes' style={{ marginLeft: 'auto' }}>
          <DecBtn
            onClick={() => setL(len - 1)}
            className="rowDiv lenBtn"
          />
          <p className="rowDiv size30 textCol noMarginBlock">{ len }</p>
          <IncBtn
            onClick={() => setL(len + 1)}
            className="rowDiv lenBtn"
          />
        </div>
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
      <div style={{ flexDirection: 'row', marginTop: 32 }}>
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
