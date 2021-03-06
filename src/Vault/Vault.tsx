import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../Component/NavBar';
import './Vault.css';

import { ReactComponent as BinBtn } from '../assets/bin.svg';
import { ReactComponent as UserBtn } from '../assets/user.svg';
import { ReactComponent as KeyBtn } from '../assets/key.svg';
import { ReactComponent as OpenBtn } from '../assets/open.svg';
import { ReactComponent as PlusBtn } from '../assets/increase.svg';
import { ReactComponent as LockBtn } from '../assets/lock.svg';
import { getPasswords } from '../Globals/Middlewares';
import { globales } from '../Globals/Context';

const CryptoJs = require('crypto-js');

const Vault = ({ location }: any) => {
  const history = useHistory();
  const context = useContext(globales);
  const input = context?.master;
  const [psw, setPsw] = useState<string | undefined>(undefined) as any;
  const [srch, setSrch] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  let p: [] = [];

  const filter = () => {
    getPsw();

    return setPsw(p.filter((word: any) =>
      word.name.toLowerCase().includes(srch.toLowerCase())
    ));
  }

  //* get passwords with error gestion
  const getPsw = () => {
    let y = [];

    try {
      if (input === undefined) {
        throw 'Password undefined. Security error.'
      }
      y = getPasswords(input);
      setPsw(y);
    } catch (e) {
      console.log(e);
      setMsg('Wrong password ! Please try again.');
    }
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

  const goTo = (item: any) => {
    return history.replace('/new', {
      input: input,
      gname: item.name,
      gusername: item.username,
      gpassword: item.password,
      isEditing: true
    });
  }

  useEffect(() => {
    let d: any[] = [];

    try {
      let m: string | undefined = context?.master;
      if (m === undefined) {
        throw 'Error: wrong master password.';
      }
      d = getPasswords(m);
    } catch (e) {
      console.log(e);
      setMsg('Error parsing your passwords... Please try again.');
      return setPsw(undefined);
    }
    return setPsw(d);
  }, []);

  return (
    <div className="container">
      <NavBar title='Your vault' active={1} />

      {/* Navigation bar 2 */}
      <div className='nav2'>
        <LockBtn
          className='nav2btn'
          onClick={() => history.replace('/securevault')}
        />
        <input
          type="text"
          placeholder="Research"
          onChange={(e) => {
            if (e?.target?.value === '')
              return setPsw(getPsw());
            setSrch(e.target.value);
            return filter();
          }}
          className='inputv'
        />
        <PlusBtn
          className='nav2btn'
          onClick={() => history.replace('/new', { input })}
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
                onClick={() => goTo(item)}
              />
              <div style={{ flex: 1 }} onClick={() => goTo(item)}>
                <p className='pswTextName' >{
                  item.name.length > 11 ?
                    item.name.substring(0, 10) + '...' :
                    item.name
                }</p>
                <p className='pswTextP'>{
                  item.username.length > 22 ?
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
