import React, { createContext, useEffect, useState } from 'react';

export type GlobalType = {
  time: Date;
  setTime: React.Dispatch<React.SetStateAction<Date>>;
  master: string | undefined;
  setMaster: (e: string | undefined) => void;
} | undefined;

export const globales = createContext<GlobalType>(undefined);

const GlobalProvider = ({ children }: any) => {
  const [time, setTime] = useState<Date>(new Date(0));
  const [master, setMaster] = useState<string | undefined>(undefined);

  useEffect(() => console.log('edited ! time = ', time, ' and master = ', master), [time, master])

  return (
    <globales.Provider value={{
      time,
      setTime,
      master,
      setMaster
    }}>
      { children }
    </globales.Provider>
  );
};

export default GlobalProvider;