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
/**
*
* will throw if error
* @param masterPassword
* @returns your passwords
*/
const getPasswords = (input: string) => {
  if (input && !isPasswordCorrect(input) || !input) {
    throw 'Error : wrong password.';
  }
  let p = localStorage.getItem('pass') as any;
  p = CryptoJs.AES.decrypt(p, input);
  p = JSON.parse(p.toString(CryptoJs.enc.Utf8));
  return [...p];
};

//! createMasterPassword will initiate the vault
//! by creating the 'pass' localStorage item.
//* createMasterPassword creates a new vault
/**
 * will throw if error
 * @param masterPassword
 */
const createMasterPassword = (e: string) => {
  console.log('createMasterPassword : ', e);
  try {
    let l = CryptoJs.AES.encrypt("validated", e.toString());
    localStorage.setItem('password', l);
    localStorage.setItem('pass', CryptoJs.AES.encrypt(JSON.stringify([]), e.toString()));
  } catch (e) {
    throw e;
  }
};

export {
  isPasswordCorrect,
  getPasswords,
  isPasswordSet,
  createMasterPassword
};