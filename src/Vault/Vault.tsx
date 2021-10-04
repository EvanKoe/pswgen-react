import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Vault.css';

const CryptoJs = require('crypto-js');

const Vault = ({ location }: any) => {
  const history = useHistory();
  const input = location?.state?.input;
  const [psw, setPsw] = useState(undefined) as any;
  const [srch, setSrch] = useState('');
  const [msg, setMsg] = useState('');

  const filter = () => {
    let p = localStorage.getItem('pass') as any;

    if (srch === '')
      return setPsw(JSON.parse(p));
    return setPsw(psw.filter((word: any) => word.name.includes(srch)))
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
    await setTimeout(() => {
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
          style={{ color: '#f7f7f7'}}
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
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC4yIDQ5MC4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48bGluayB0eXBlPSJ0ZXh0L2NzcyIgaWQ9ImRhcmstbW9kZSIgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSIiPjwvbGluaz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMzQxLjEsMzQuM2g5MC41bC0yMDYuOSwyMDdjLTYuNyw2LjctNi43LDE3LjYsMCwyNC4zYzMuMywzLjMsNy43LDUsMTIuMSw1czguOC0xLjcsMTIuMS01bDIwNy0yMDd2OTAuNSAgICAgYzAsOS41LDcuNywxNy4yLDE3LjEsMTcuMmM5LjUsMCwxNy4yLTcuNywxNy4yLTE3LjJWMTcuMkM0OTAuMiw3LjcsNDgyLjUsMCw0NzMsMEgzNDEuMWMtOS41LDAtMTcuMiw3LjctMTcuMiwxNy4yICAgICBDMzI0LDI2LjYsMzMxLjYsMzQuMywzNDEuMSwzNC4zeiIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMTAyLjksNDkwLjJoMjg0LjNjNTYuOCwwLDEwMi45LTQ2LjIsMTAyLjktMTAyLjlWMjUzLjRjMC05LjUtNy43LTE3LjEtMTcuMi0xNy4xcy0xNy4xLDcuNy0xNy4xLDE3LjF2MTMzLjggICAgIGMwLDM3LjgtMzAuOCw2OC42LTY4LjYsNjguNkgxMDIuOWMtMzcuOCwwLTY4LjYtMzAuOC02OC42LTY4LjZWMTYxLjRWMTAzYzAtMzcuOCwzMC44LTY4LjYsNjguNi02OC42aDEzMi43ICAgICBjOS41LDAsMTcuMS03LjcsMTcuMS0xNy4yUzI0NSwwLDIzNS42LDBIMTAyLjlDNDYuMSwwLDAsNDYuMiwwLDEwMi45djU4LjR2MjI1LjlDMCw0NDQsNDYuMiw0OTAuMiwxMDIuOSw0OTAuMnoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
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
                <p className='pswTextName'>{
                  item.name.length > 12 ? item.name.substring(0, 10) + '...' : item.name
                }</p>
                <p className='pswTextP'>{
                  item.username.length > 20 ? item.username.substring(0, 20) + '...' : item.username
                }</p>
              </div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxsaW5rIHR5cGU9InRleHQvY3NzIiBpZD0iZGFyay1tb2RlIiByZWw9InN0eWxlc2hlZXQiIGhyZWY9IiI+PC9saW5rPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwYy03NC40MzksMC0xMzUsNjAuNTYxLTEzNSwxMzVzNjAuNTYxLDEzNSwxMzUsMTM1czEzNS02MC41NjEsMTM1LTEzNVMzMzAuNDM5LDAsMjU2LDB6IE0yNTYsMjQwICAgIGMtNTcuODk3LDAtMTA1LTQ3LjEwMy0xMDUtMTA1YzAtNTcuODk3LDQ3LjEwMy0xMDUsMTA1LTEwNWM1Ny44OTcsMCwxMDUsNDcuMTAzLDEwNSwxMDVDMzYxLDE5Mi44OTcsMzEzLjg5NywyNDAsMjU2LDI0MHoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1ICAgIEM1MS4yNTUsMzk1LjUzOSwzMSw0NDQuODMzLDMxLDQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDQyMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIEM0ODEsNDQ0LjgzMyw0NjAuNzQ1LDM5NS41MzksNDIzLjk2NiwzNTguMTk1eiBNNjEuNjYsNDgyYzcuNTE1LTg1LjA4Niw3OC4zNTEtMTUyLDE2NC4zNC0xNTJoNjAgICAgYzg1Ljk4OSwwLDE1Ni44MjUsNjYuOTE0LDE2NC4zNCwxNTJINjEuNjZ6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
                style={{ padding: 10 }}
                className='animatedButton'
                height='40'
                width='40'
                onClick={() => toClipboard(item.username, true)}
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGxpbmsgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIj48L2xpbms+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSIzNjQiIGN5PSIxNDAuMDYyIiByPSIzMiIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDYuNDc4LDE2NS45MzdjLTEwLjY4LTI3LjE5NC0zMC4yNjQtNjYuNDMxLTYyLjkxNS05OC45MjdjLTMyLjUzNS0zMi4zODQtNzEuMzU2LTUxLjQwOC05OC4xOTQtNjEuNjY2ICAgIGMtMjkuNDY0LTExLjI2MS02Mi45NDUtNC4xNjMtODUuMjk1LDE4LjA4MmwtNzguNTM4LDc4LjE3Yy0yMy4yODEsMjMuMTcxLTI5Ljk5MSw1OC44MjUtMTYuNjk4LDg4LjcyICAgIGM0LjEyMiw5LjI3Miw4LjYwNSwxOC4zNDEsMTMuMzk1LDI3LjEwM0w1Ljg1OCwzODkuNzkzQzIuMTA3LDM5My41NDQsMCwzOTguNjMxLDAsNDAzLjkzNnY4OGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGg4OCAgICBjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjB2LTM2bDM2LTAuMDAxYzExLjA0NiwwLDIwLTguOTU0LDIwLTIwdi0zNS45OTloMzZjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBoLTU2ICAgIGMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjB2MzUuOTk5bC0zNiwwLjAwMWMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjB2MzZINDBWNDEyLjIybDE3Ny4zNTUtMTc3LjM1NCAgICBjNi41MTYtNi41MTYsNy43MzctMTYuNjM5LDIuOTU4LTI0LjUxN2MtNi45MzEtMTEuNDI0LTEzLjI5OC0yMy42MzItMTguOTIzLTM2LjI4NWMtNi41OTktMTQuODQxLTMuMjM3LTMyLjU3LDguMzY2LTQ0LjExOSAgICBsNzguNTM3LTc4LjE2OWMxMS4yMTMtMTEuMTU5LDI4LjAxMS0xNC43MTgsNDIuNzk4LTkuMDY4YzIzLjIyMiw4Ljg3Niw1Ni42OSwyNS4yMTQsODQuMjU2LDUyLjY1MiAgICBjMjcuNzM1LDI3LjYwNCw0NC42Miw2MS41NjcsNTMuOSw4NS4xOTdjNS43OTEsMTQuNzQ4LDIuMjcyLDMxLjUwMy04Ljk2NSw0Mi42ODdsLTc5LjQ4Niw3OS4xMTQgICAgYy0xMS41NzUsMTEuNTE5LTI4Ljg1MSwxNC44ODctNDQuMDE2LDguNThjLTEyLjUwNy01LjIwMi0yNC42Mi0xMS4zODItMzYtMTguMzY3Yy05LjQxMy01Ljc3OC0yMS43MjktMi44My0yNy41MDcsNi41ODQgICAgYy01Ljc3OCw5LjQxNC0yLjgzMSwyMS43Myw2LjU4MywyNy41MDhjMTMuMTUyLDguMDcyLDI3LjEzNiwxNS4yMDcsNDEuNTYyLDIxLjIwN2MzMC4xNDIsMTIuNTM5LDY0LjUyNSw1LjgsODcuNTk1LTE3LjE2MSAgICBsNzkuNDg2LTc5LjExM0M1MTEuMDQ0LDIyOS4xNTcsNTE4LjEwMSwxOTUuNTM0LDUwNi40NzgsMTY1LjkzN3oiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                style={{ padding: 10 }}
                className='animatedButton'
                height='40'
                width='40'
                onClick={() => toClipboard(item.password, false)}
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQyNyA0MjcuMDAxMzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNDAsMCkiPjxsaW5rIHR5cGU9InRleHQvY3NzIiBpZD0iZGFyay1tb2RlIiByZWw9InN0eWxlc2hlZXQiIGhyZWY9IiI+PC9saW5rPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTE0LjM5ODQzOCAxNTQuNzAzMTI1Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjE4OWMwIDUuNTE5NTMxIDQuNDc2NTYyIDEwIDEwIDEwIDUuNTIzNDM3IDAgMTAtNC40ODA0NjkgMTAtMTB2LTE4OWMwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDAiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yOC4zOTg0MzggMTI3LjEyMTA5NHYyNDYuMzc4OTA2YzAgMTQuNTYyNSA1LjMzOTg0MyAyOC4yMzgyODEgMTQuNjY3OTY4IDM4LjA1MDc4MSA5LjI4NTE1NiA5LjgzOTg0NCAyMi4yMDcwMzIgMTUuNDI1NzgxIDM1LjczMDQ2OSAxNS40NDkyMTloMTg5LjIwMzEyNWMxMy41MjczNDQtLjAyMzQzOCAyNi40NDkyMTktNS42MDkzNzUgMzUuNzMwNDY5LTE1LjQ0OTIxOSA5LjMyODEyNS05LjgxMjUgMTQuNjY3OTY5LTIzLjQ4ODI4MSAxNC42Njc5NjktMzguMDUwNzgxdi0yNDYuMzc4OTA2YzE4LjU0Mjk2OC00LjkyMTg3NSAzMC41NTg1OTMtMjIuODM1OTM4IDI4LjA3ODEyNC00MS44NjMyODItMi40ODQzNzQtMTkuMDIzNDM3LTE4LjY5MTQwNi0zMy4yNTM5MDYtMzcuODc4OTA2LTMzLjI1NzgxMmgtNTEuMTk5MjE4di0xMi41Yy4wNTg1OTMtMTAuNTExNzE5LTQuMDk3NjU3LTIwLjYwNTQ2OS0xMS41MzkwNjMtMjguMDMxMjUtNy40NDE0MDYtNy40MjE4NzUtMTcuNTUwNzgxLTExLjU1NDY4NzUtMjguMDYyNS0xMS40Njg3NWgtODguNzk2ODc1Yy0xMC41MTE3MTktLjA4NTkzNzUtMjAuNjIxMDk0IDQuMDQ2ODc1LTI4LjA2MjUgMTEuNDY4NzUtNy40NDE0MDYgNy40MjU3ODEtMTEuNTk3NjU2IDE3LjUxOTUzMS0xMS41MzkwNjIgMjguMDMxMjV2MTIuNWgtNTEuMTk5MjE5Yy0xOS4xODc1LjAwMzkwNi0zNS4zOTQ1MzEgMTQuMjM0Mzc1LTM3Ljg3ODkwNyAzMy4yNTc4MTItMi40ODA0NjggMTkuMDI3MzQ0IDkuNTM1MTU3IDM2Ljk0MTQwNyAyOC4wNzgxMjYgNDEuODYzMjgyem0yMzkuNjAxNTYyIDI3OS44Nzg5MDZoLTE4OS4yMDMxMjVjLTE3LjA5NzY1NiAwLTMwLjM5ODQzNy0xNC42ODc1LTMwLjM5ODQzNy0zMy41di0yNDUuNWgyNTB2MjQ1LjVjMCAxOC44MTI1LTEzLjMwMDc4MiAzMy41LTMwLjM5ODQzOCAzMy41em0tMTU4LjYwMTU2Mi0zNjcuNWMtLjA2NjQwNy01LjIwNzAzMSAxLjk4MDQ2OC0xMC4yMTg3NSA1LjY3NTc4MS0xMy44OTQ1MzEgMy42OTE0MDYtMy42NzU3ODEgOC43MTQ4NDMtNS42OTUzMTMgMTMuOTI1NzgxLTUuNjA1NDY5aDg4Ljc5Njg3NWM1LjIxMDkzNy0uMDg5ODQ0IDEwLjIzNDM3NSAxLjkyOTY4OCAxMy45MjU3ODEgNS42MDU0NjkgMy42OTUzMTMgMy42NzE4NzUgNS43NDIxODggOC42ODc1IDUuNjc1NzgyIDEzLjg5NDUzMXYxMi41aC0xMjh6bS03MS4xOTkyMTkgMzIuNWgyNzAuMzk4NDM3YzkuOTQxNDA2IDAgMTggOC4wNTg1OTQgMTggMThzLTguMDU4NTk0IDE4LTE4IDE4aC0yNzAuMzk4NDM3Yy05Ljk0MTQwNyAwLTE4LTguMDU4NTk0LTE4LTE4czguMDU4NTkzLTE4IDE4LTE4em0wIDAiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                style={{ padding: 10 }}
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
