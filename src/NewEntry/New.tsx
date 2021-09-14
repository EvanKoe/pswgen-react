import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './New.css';

const New = () => {
  const history = useHistory()
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const save = () => {
    let p = localStorage.getItem('pass') as any;
    p = JSON.parse(p);
    let o = {
      name: name,
      username: username,
      password: password
    };
    console.log(p);
    if (p !== null) {
      p.push(o);
      localStorage.setItem('pass', JSON.stringify(p));
    } else
      localStorage.setItem('pass', JSON.stringify([o]));
    return history.replace('/vault');
  }

  return (
    <div style={{ backgroundColor: '#212121', height: '100vh' }}>
      {/* Navigation bar */}
      <div className='navbar'>
        <img
          className='nav'
          height='40'
          width='40'
          alt='Go back'
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          onClick={() => history.replace('/vault')}
        />
        <p className='title'>Create new</p>
        <img
          className='nav'
          height='40'
          width='40'
          alt='Save'
          src="https://img.icons8.com/ios-glyphs/30/000000/save--v1.png"
          onClick={() => save()}
        />
      </div>

      {/* Form */}
      <div className='mainn'>
        <p className='titlen'>New password</p>
        <input
          type='text'
          placeholder='Name'
          className='inputn'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Username or email adress'
          className='inputn'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='text'
          placeholder='Password'
          className='inputn'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='button'
          style={{ float: 'right', marginRight: '30px' }}
          className='button'
          onClick={save}
          value='Save'
        />
      </div>
    </div>
  )
}

export default New;