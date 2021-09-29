import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import './New.css';

interface LocaState {
  props: {
    gname: string;
    gusername: string;
    gpassword: string;
  };
};

const New = () => {
  const history = useHistory()
  let state = useLocation().state as LocaState;
  let prop = state && state.props ? state.props : undefined;
  const [name, setName] = useState(prop === undefined ? '' : prop.gname);
  const [username, setUsername] = useState(prop === undefined ? '' : prop.gusername);
  const [password, setPassword] = useState(prop === undefined ? '' : prop.gpassword);
  const [isPwsViewable, setIfPwsViewable] = useState(false);
  const saveName = prop ? prop.gname : undefined;

  const save = () => {
    let obj = { name, username, password };
    let p = localStorage.getItem('pass') as any;
    p = JSON.parse(p);

    if (!prop) {
      let o = obj;
      if (p !== null) {
        p.push(o);
        localStorage.setItem('pass', JSON.stringify(p));
      } else
        localStorage.setItem('pass', JSON.stringify([o]));
    } else {
      let i = 0;
      for (i; p[i]; ++i) {
        if (p[i].name === saveName) {
          break ;
        }
      }
      p[i] = obj
      localStorage.setItem('pass', JSON.stringify(p));
    }
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
        <p className='title'>{ saveName === undefined ? 'Create new' : 'Modify' }</p>
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
        <p className='titlen'>{ saveName === undefined ? 'New password' : 'Edit password' }</p>
        <input
          type='text'
          value={name}
          placeholder='Name'
          className='inputn'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={username}
          placeholder='Username or email adress'
          className='inputn'
          onChange={(e) => setUsername(e.target.value)}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input
            type='text'
            value={isPwsViewable ? password : '*'.repeat(password.length)}
            onKeyDown={(e) => {
              if (e.which === 8) // if backspace
                return setPassword(str => str.slice(0, -1));
              else if (e.which === 13) // if Enter
                return save();
              else if (e.key.length === 1)
                return setPassword(p => p.concat(e.key));
            }}
            placeholder='Password'
            className='inputn'
          />
          <img
            src={!isPwsViewable ?
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxsaW5rIHR5cGU9InRleHQvY3NzIiBpZD0iZGFyay1tb2RlIiByZWw9InN0eWxlc2hlZXQiIGhyZWY9IiI+PC9saW5rPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIwMy4wNywyNTguOTNjLTMuOS0zLjkxLTEwLjI0LTMuOTEtMTQuMTQsMGMtMy45MSwzLjktMy45MSwxMC4yNCwwLDE0LjE0YzMuOSwzLjkxLDEwLjI0LDMuOTEsMTQuMTQsMCAgICBDMjA2Ljk4LDI2OS4xNywyMDYuOTgsMjYyLjgzLDIwMy4wNywyNTguOTN6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsMjc2Yy0xNi41NDIsMC0zMCwxMy40NTgtMzAsMzBzMTMuNDU4LDMwLDMwLDMwczMwLTEzLjQ1OCwzMC0zMFMyNzIuNTQyLDI3NiwyNTYsMjc2eiBNMjU2LDMxNiAgICBjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBjMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwQzI2NiwzMTEuNTE0LDI2MS41MTQsMzE2LDI1NiwzMTZ6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsMjI2Yy0xMS4xNzgsMC0yMS45ODcsMi4yNTktMzIuMTI0LDYuNzE1Yy01LjA1NiwyLjIyMy03LjM1Myw4LjEyMy01LjEzMSwxMy4xNzkgICAgYzIuMjIyLDUuMDU2LDguMTIzLDcuMzUyLDEzLjE3OSw1LjEzMUMyMzkuNTA5LDI0Ny42OTEsMjQ3LjYxLDI0NiwyNTYsMjQ2YzMzLjA4NCwwLDYwLDI2LjkxNiw2MCw2MHMtMjYuOTE2LDYwLTYwLDYwICAgIHMtNjAtMjYuOTE2LTYwLTYwYzAtMC4zNDItMC4wMDEtMC42NzYsMC4wMDctMS4wMThjMC4xMjgtNS41MjEtNC4yNDQtMTAuMTAxLTkuNzY1LTEwLjIyOWMtNS41My0wLjEzOC0xMC4xMDEsNC4yNDMtMTAuMjI5LDkuNzY1ICAgIEMxNzYuMDAxLDMwNS4wMTYsMTc2LDMwNS41MDIsMTc2LDMwNmMwLDQ0LjExMiwzNS44ODgsODAsODAsODBzODAtMzUuODg4LDgwLTgwUzMwMC4xMTIsMjI2LDI1NiwyMjZ6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsNzZjLTUuNTIzLDAtMTAsNC40NzctMTAsMTB2NjBjMCw1LjUyMyw0LjQ3NywxMCwxMCwxMHMxMC00LjQ3NywxMC0xMFY4NkMyNjYsODAuNDc3LDI2MS41MjMsNzYsMjU2LDc2eiIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTQ0LjI4MSwxNTAuMTM4bC00Mi40Mi00Mi40MmMtMy45MDUtMy45MDUtMTAuMjM3LTMuOTA1LTE0LjE0MywwYy0zLjkwNSwzLjkwNS0zLjkwNSwxMC4yMzcsMCwxNC4xNDNsNDIuNDIsNDIuNDIgICAgYzMuOTA1LDMuOTA1LDEwLjIzOCwzLjkwNiwxNC4xNDMsMEMxNDguMTg2LDE2MC4zNzYsMTQ4LjE4NiwxNTQuMDQ0LDE0NC4yODEsMTUwLjEzOHoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQyNC4yODIsMTA3LjcxOGMtMy45MDUtMy45MDUtMTAuMjM3LTMuOTA1LTE0LjE0MywwbC00Mi40Miw0Mi40MmMtMy45MDUsMy45MDUtMy45MDUsMTAuMjM3LDAsMTQuMTQzICAgIGMzLjkwNCwzLjkwNSwxMC4yMzcsMy45MDYsMTQuMTQzLDBsNDIuNDItNDIuNDJDNDI4LjE4NywxMTcuOTU2LDQyOC4xODcsMTExLjYyNCw0MjQuMjgyLDEwNy43MTh6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDkuNDk1LDMwNy43MUM0NDUuOTcsMjM1Ljc5MSwzNTEuNjQ2LDE3NiwyNTYsMTc2Yy05NS42NTksMC0xODkuOTgyLDU5LjgwNi0yNTMuNDk1LDEzMS43MSAgICBjLTMuNjU2LDQuMTQtMy4yNjQsMTAuNDU5LDAuODc1LDE0LjExNWM0LjE0LDMuNjU2LDEwLjQ2LDMuMjY0LDE0LjExNS0wLjg3NWMyLjEzMS0yLjQxMyw0LjMxNC00LjgxNyw2LjUyNS03LjIwNiAgICBDNzMuNDM1LDM4OC40MDgsMTYzLjAxMyw0MzYsMjU2LDQzNnMxODIuNTY1LTQ3LjU5MiwyMzEuOTgtMTIyLjI1NmMyLjIxMSwyLjM5LDQuMzk0LDQuNzk0LDYuNTI1LDcuMjA2ICAgIGMzLjY0NCw0LjEyNiw5Ljk2Myw0LjU0MiwxNC4xMTUsMC44NzVDNTEyLjc1OSwzMTguMTY5LDUxMy4xNTEsMzExLjg0OSw1MDkuNDk1LDMwNy43MXogTTI1Niw0MTYgICAgYy04Ny45MTUsMC0xNzIuNDcxLTQ1LjY3OS0yMTcuNjg5LTExNi45OEM3My45MzksMjY0LjEwOSwxNTYuMjYxLDE5NiwyNTYsMTk2Yzk5Ljc0LDAsMTgyLjA2MSw2OC4xMDksMjE3LjY4OSwxMDMuMDE5ICAgIEM0MjguNDcxLDM3MC4zMjEsMzQzLjkxNSw0MTYsMjU2LDQxNnoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
              : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGxpbmsgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIj48L2xpbms+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzE2LjMzMiwxOTUuNjYyYy00LjE2LTQuMTYtMTAuOTIzLTQuMTYtMTUuMDgzLDBjLTQuMTYsNC4xNi00LjE2LDEwLjk0NCwwLDE1LjA4MyAgICBjMTIuMDc1LDEyLjA3NSwxOC43NTIsMjguMTM5LDE4Ljc1Miw0NS4yNDhjMCwzNS4yODUtMjguNzE1LDY0LTY0LDY0Yy0xNy4xMDksMC0zMy4xNzMtNi42NTYtNDUuMjQ4LTE4Ljc1MiAgICBjLTQuMTYtNC4xNi0xMC45MjMtNC4xNi0xNS4wODMsMGMtNC4xNiw0LjEzOS00LjE2LDEwLjkyMywwLDE1LjA4M2MxNi4wODUsMTYuMTI4LDM3LjUyNSwyNS4wMDMsNjAuMzMxLDI1LjAwMyAgICBjNDcuMDYxLDAsODUuMzMzLTM4LjI3Miw4NS4zMzMtODUuMzMzQzM0MS4zMzQsMjMzLjE4NywzMzIuNDYsMjExLjc0NywzMTYuMzMyLDE5NS42NjJ6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNzAuODcsMTcyLjEzMWMtNC44NDMtMC44NTMtOS43OTItMS40NzItMTQuODY5LTEuNDcyYy00Ny4wNjEsMC04NS4zMzMsMzguMjcyLTg1LjMzMyw4NS4zMzMgICAgYzAsNS4wNzcsMC42MTksMTAuMDI3LDEuNDkzLDE0Ljg2OWMwLjkxNyw1LjE2Myw1LjQxOSw4LjgxMSwxMC40NzUsOC44MTFjMC42MTksMCwxLjIzNy0wLjA0MywxLjg3Ny0wLjE3MSAgICBjNS43ODEtMS4wMjQsOS42NjQtNi41NzEsOC42NC0xMi4zNTJjLTAuNjYxLTMuNjI3LTEuMTUyLTcuMzE3LTEuMTUyLTExLjE1N2MwLTM1LjI4NSwyOC43MTUtNjQsNjQtNjQgICAgYzMuODQsMCw3LjUzMSwwLjQ5MSwxMS4xNTcsMS4xMzFjNS42NzUsMS4xNTIsMTEuMzI4LTIuODU5LDEyLjM1Mi04LjY0QzI4MC41MzQsMTc4LjcwMiwyNzYuNjUyLDE3My4xNTUsMjcwLjg3LDE3Mi4xMzF6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDkuNDYyLDI0OS4xMDJjLTIuNDExLTIuODU5LTYwLjExNy03MC4yMDgtMTM5LjcxMi0xMTEuNDQ1Yy01LjE2My0yLjcwOS0xMS42NjktMC42NjEtMTQuMzc5LDQuNTg3ICAgIGMtMi43MDksNS4yMjctMC42NjEsMTEuNjY5LDQuNTg3LDE0LjM3OWM2MS4zMTIsMzEuNzQ0LDExMC4yOTMsODEuMjgsMTI3LjA0LDk5LjM3MWMtMjUuNDI5LDI3LjU0MS0xMjUuNTA0LDEyOC0yMzAuOTk3LDEyOCAgICBjLTM1Ljc5NywwLTcxLjg3Mi04LjY0LTEwNy4yNjQtMjUuNzA3Yy01LjI0OC0yLjU4MS0xMS42NjktMC4zNDEtMTQuMjI5LDQuOTcxYy0yLjU4MSw1LjI5MS0wLjM0MSwxMS42NjksNC45NzEsMTQuMjI5ICAgIGMzOC4yOTMsMTguNDk2LDc3LjUwNCwyNy44NCwxMTYuNTIzLDI3Ljg0YzEzMS40MzUsMCwyNDguNTU1LTEzNi42MTksMjUzLjQ4My0xNDIuNDQzICAgIEM1MTIuODU0LDI1OC45MTUsNTEyLjgzMywyNTMuMDkxLDUwOS40NjIsMjQ5LjEwMnoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMyNS45OTYsMTE4Ljk0N2MtMjQuMjc3LTguMTcxLTQ3LjgyOS0xMi4yODgtNjkuOTk1LTEyLjI4OGMtMTMxLjQzNSwwLTI0OC41NTUsMTM2LjYxOS0yNTMuNDgzLDE0Mi40NDMgICAgYy0zLjExNSwzLjY2OS0zLjM3MSw5LjAwMy0wLjU5NywxMi45OTJjMS40NzIsMi4xMTIsMzYuNzM2LDUyLjE4MSw5Ny44NTYsOTIuNzc5YzEuODEzLDEuMjE2LDMuODQsMS43OTIsNS44ODgsMS43OTIgICAgYzMuNDM1LDAsNi44MjctMS42NjQsOC44NzUtNC44YzMuMjY0LTQuODg1LDEuOTItMTEuNTItMi45ODctMTQuNzYzYy00NC44ODUtMjkuODQ1LTc1LjYwNS02NS44NzctODcuMTA0LTgwLjUzMyAgICBjMjQuNTU1LTI2LjY2NywxMjUuMjkxLTEyOC41NzYsMjMxLjU1Mi0xMjguNTc2YzE5Ljg2MSwwLDQxLjEzMSwzLjc1NSw2My4xODksMTEuMTU3YzUuNTg5LDIuMDA1LDExLjY0OC0xLjA4OCwxMy41MDQtNi42OTkgICAgQzMzNC41NzIsMTI2Ljg2MiwzMzEuNTg1LDEyMC44MjUsMzI1Ljk5NiwxMTguOTQ3eiIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDQ0Ljg2NSw2Ny4xMjhjLTQuMTYtNC4xNi0xMC45MjMtNC4xNi0xNS4wODMsMEw2Ny4xMTYsNDI5Ljc5NWMtNC4xNiw0LjE2LTQuMTYsMTAuOTIzLDAsMTUuMDgzICAgIGMyLjA5MSwyLjA2OSw0LjgyMSwzLjExNSw3LjU1MiwzLjExNWMyLjczMSwwLDUuNDYxLTEuMDQ1LDcuNTMxLTMuMTE1TDQ0NC44NjUsODIuMjExICAgIEM0NDkuMDI1LDc4LjA1MSw0NDkuMDI1LDcxLjI4OCw0NDQuODY1LDY3LjEyOHoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
            }
            style={{ marginRight: 30 }}
            width={40}
            height={40}
            onClick={() => setIfPwsViewable(e => !e)}
          />
        </div>
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