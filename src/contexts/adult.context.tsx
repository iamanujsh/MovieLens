// @ts-nocheck
import { createContext, useState } from "react";

export const AdultContext = createContext({
  isAdult: null,
  setIsAdult: () => {},
});

export const AdultProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdult, setIsAdult] = useState(false);

  const value = { isAdult, setIsAdult };

  return (
    <AdultContext.Provider value={value}>{children}</AdultContext.Provider>
  );
};
