import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Vault.css';

//? Images
import Open from '../assets/open.png';
import Key from '../assets/key.png';
import User from '../assets/name.png';
import Bin from '../assets/bin.png';

//todo TO DO :
//todo sync on GDrive
//todo Timer to lock the vault

const Vault = () => {
  const history = useHistory();
  const [psw, setPsw] = useState(undefined) as any;
  const [srch, setSrch] = useState('');

  const filter = () => {
    let p = localStorage.getItem('pass') as any;

    if (srch === '')
      return setPsw(JSON.parse(p));
    return setPsw(psw.filter((word: any) => word.name.includes(srch)))
  }

  const removeItem = (item: any, index: number) => {
    const p = [...psw];
    p.splice(index, 1);
    localStorage.setItem('pass', JSON.stringify(p));
    return setPsw(p);
  }

  const toClipboard = (string: string) => {
    navigator.clipboard.writeText(string)
    return alert('\'' + string + '\' copied to your clipboard !');
  }

  useEffect(() => {
    let p = localStorage.getItem('pass') as any;
    p = JSON.parse(p);

    if (p !== undefined && p !== null)
      setPsw(p);
  }, [])

  return (
    <>
      {/* Navigation bar */}
      <div className="navbar">
        <img
          className="nav"
          alt="Password generator"
          src="https://img.icons8.com/ios/50/000000/password--v1.png"
          onClick={() => history.replace('/')}
        />
        <p
          className="title"
          style={{ color: '#d4eee6'}}
        >Your vault</p>
        <img
          className="nav active"
          alt="Your vault"
          src="https://img.icons8.com/pastel-glyph/50/000000/safe--v2.png"
        />
      </div>

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
          onKeyDown={(e) => {
            if (e.code === 'Enter')
              filter()
          }}
          onChange={(e) => setSrch(e.target.value)}
          className='inputv'
        />
        <img
          src="https://img.icons8.com/fluency-systems-filled/48/000000/plus-math.png"
          alt='add an entry'
          className='nav2btn'
          height='50vh'
          onClick={() => history.replace('/new')}
        />
      </div>

      {/* Password list */}
      <div style={(psw === undefined) ? { textAlign: 'center' } : {}} className="mainv">
        {psw === undefined ? (
          <>
          <p className="emptyText">Nothing to see here</p>
          <p style={{ color: '#fff' }}>Click '+' to add a new entry</p>
          </>
        ) : psw.map((item: any, index: number) => {
          return (
            <div className="eachPsw" key={'ep_' + index}>
              <img
                src={Open}
                width='40'
                height='40'
                className='openImg animatedButton'
              />
              <div style={{ flex: 1 }}>
                <p className='pswTextName'>{item.name}</p>
                <p className='pswTextP'>{item.username}</p>
              </div>
              <img
                style={{ padding: 10 }}
                className='animatedButton'
                height='40'
                width='40'
                src={User}
                onClick={() => toClipboard(item.username)}
              />
              <img
                style={{ padding: 10 }}
                className='animatedButton'
                height='40'
                width='40'
                src={Key}
                onClick={() => toClipboard(item.password)}
              />
              <img
                style={{ padding: 10 }}
                className='animatedButton'
                height='40'
                width='40'
                src={Bin}
                onClick={() => removeItem(item, index)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Vault;
