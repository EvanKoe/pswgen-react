import { master, setTime, time } from "./globales";

const CryptoJs = require('crypto-js');

//! isPasswordCorrect will throw an error if localStorage is
//! not set. Do not forget to try/catch !

const isPasswordCorrect = (input: string) => {
  let p = undefined;

  try {
    p = localStorage.getItem('password') as string;
  } catch (e) {
    throw e;
  }

  if (!p) {
    return (false);
  }
  let l = CryptoJs.AES.decrypt(p, input.toString());
  l = l.toString(CryptoJs.enc.Utf8);
  return (l === 'validated' ? true : false);
};

//! isPasswordSet won't throw any error
//! It will only return a boolean

const isPasswordSet = () => {
  let p = localStorage.getItem('password') as string;
  return (p ? true : false);
};

//! getPasswords will throw an error if the password is invalid.
//! Do not forget to try/catch !

const getPasswords = (input: string) => {
  if (input && !isPasswordCorrect(input) || !input)
    throw 'Error : wrong password.';
  let p = localStorage.getItem('pass') as any;
  p = CryptoJs.AES.decrypt(p, input);
  p = JSON.parse(p.toString(CryptoJs.enc.Utf8));
  return [...p];
};

//! setTimeOut (do not confuse with setTimeout()) will start
//! a counter to lock the vault after 2 mins

const setTimeOut = () => {
  setTime(new Date());
};

//! getTimeGap will throw an error if time is not started
//* it returns the result in seconds (normally)
const getTimeGap = () => {
  if (time === undefined) {
    throw 'Time has not been set. Cannot calculate.';
  }
  return (new Date().getTime() - time.getTime()) / 1000;
};

//! getMasterPassword will return the master password
//! it won't throw an error if undefined.

const getMasterPassword = () => {
  return master ? master : undefined;
}

export {
  isPasswordCorrect,
  isPasswordSet,
  getPasswords,
  setTimeOut,
  getTimeGap,
  getMasterPassword
}