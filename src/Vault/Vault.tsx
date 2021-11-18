import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../Component/NavBar';
import './Vault.css';

import { ReactComponent as BinBtn } from '../assets/bin.svg';
import { ReactComponent as UserBtn } from '../assets/user.svg';
import { ReactComponent as KeyBtn } from '../assets/key.svg';
import { ReactComponent as OpenBtn } from '../assets/open.svg';

const CryptoJs = require('crypto-js');

const Vault = ({ location }: any) => {
  const history = useHistory();
  const input = location?.state?.input;
  const [psw, setPsw] = useState(undefined) as any;
  const [srch, setSrch] = useState('');
  const [msg, setMsg] = useState('');

  const maj = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const filter = () => {
    let p = getPasswords() as [];

    return setPsw(p.filter((word: any) =>
      word.name.toLowerCase().includes(srch.toLowerCase())
    ));
  }

  const getPasswords = () => {
    let p = localStorage.getItem('pass') as any;
    if (p === undefined || p === null)
      return p;
    p = CryptoJs.AES.decrypt(p, input);
    p = JSON.parse(p.toString(CryptoJs.enc.Utf8));
    return [...p];
  }

  const removeItem = (item: any, index: number) => {
    const p = [...psw];

    if (p.length === 1) {
      localStorage.removeItem('pass');
      return setPsw(undefined);
    }
    p.splice(index, 1);
    let l = CryptoJs.AES.encrypt(JSON.stringify(p), input).toString();
    localStorage.setItem('pass', l);
    return setPsw(p);
  }

  const toClipboard = async (string: string, display: boolean) => {
    navigator.clipboard.writeText(string)

    if (!display)
      setMsg('Password copied to your clipboard !');
    else
      setMsg('\'' + string + '\' copied to your clipbord !');
    setTimeout(() => {
      return setMsg('');
    }, 2000);
  }

  useEffect(() => {
    let p = localStorage.getItem('pass') as any;
    if (!input) {
      alert('Security error: please reload.');
      return history.replace('/');
    }
    let t = input.toString();
    let d = undefined;

    if (p !== undefined && p !== null) {
      d = CryptoJs.AES.decrypt(p, t);
      d = JSON.parse(d.toString(CryptoJs.enc.Utf8));
      return setPsw(d);
    }
    return setPsw(undefined);
  }, []);

  return (
    <div className="container">
      <NavBar title='Your vault' active={1} />

      {/* Navigation bar 2 */}
      <div className='nav2'>
        <img
          src="https://img.icons8.com/dotty/50/000000/lock-2.png"
          alt='Lock your vault'
          className='nav2btn'
          height='50vh'
          onClick={() => history.replace('/securevault')}
        />
        <input
          type="text"
          placeholder="Research"
          onChange={(e) => {
            if (e?.target?.value === '')
              return setPsw(getPasswords());
            setSrch(e.target.value);
            return filter();
          }}
          className='inputv'
        />
        <img
          src="https://img.icons8.com/fluency-systems-filled/48/000000/plus-math.png"
          alt='add an entry'
          className='nav2btn'
          height='50vh'
          onClick={() => history.replace('/new', {psw: input})}
        />
      </div>

      {/* Password list */}
      <div style={(psw === undefined) ? { textAlign: 'center' } : {}} className="mainv">
        <p className="msg">{ msg }</p>
        {psw === undefined ? (
          <>
          <p className="emptyText">Nothing to see here</p>
          <p style={{ color: '#fff' }}>Click '+' to add a new entry</p>
          </>
        ) : psw.map((item: any, index: number) => {
          return (
            <div className="eachPsw" key={'ep_' + index}>
              <OpenBtn
                width='40'
                height='40'
                className='openImg animatedButton'
                onClick={() => history.replace('/new', {
                  psw: input,
                  gname: item.name,
                  gusername: item.username,
                  gpassword: item.password
                })}
              />
              <div style={{ flex: 1 }}>
                <p className='pswTextName' >{
                  item.name.length > 11 ?
                    item.name.substring(0, 10) + '...' :
                    item.name
                }</p>
                <p className='pswTextP'>{
                  item.username.length > 20 ?
                    item.username.substring(0, 20) + '...' :
                    item.username
                }</p>
              </div>
              <UserBtn
                className='animatedButton'
                height='40'
                width='40'
                onClick={() => toClipboard(item.username, true)}
              />
              <KeyBtn
                className='animatedButton'
                height='40'
                width='40'
                onClick={() => toClipboard(item.password, false)}
              />
              <BinBtn
                className='animatedButton'
                height='40'
                width='40'
                onClick={() => removeItem(item, index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vault;
