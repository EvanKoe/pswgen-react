const CryptoJs = require('crypto-js');

const isPasswordCorrect = (input: string) => {
  let p = localStorage.getItem('password') as string;
  if (!p) {
    return (false);
  }
  let l = CryptoJs.AES.decrypt(p, input.toString());
  l = l.toString(CryptoJs.enc.Utf8);
  return (l === 'validated' ? true : false);
};

const isPasswordSet = () => {
  let p = localStorage.getItem('password') as string;
  return (p ? true : false);
}

export {
  isPasswordCorrect,
  isPasswordSet
}