import React, { createContext, useState } from 'react';

const globales = createContext(() => {
  const [time, setTime] = useState<Date>();
  const [master, setMaster] = useState<string | undefined>(undefined);
});

//! something's wrong here (trying to setup context for
//! timeout and master password)

const Globales = () => {
  const [time, setTime] = useState<Date>();
  const [master, setMaster] = useState<string | undefined>(undefined);

  return {
    time,
    setTime,
    master,
    setMaster
  };
};

const {
  time,
  setTime,
  master,
  setMaster
} = Globales();

export {
  time,
  setTime,
  master,
  setMaster
}