// ScrollContext.js
import { createContext, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isHeroInView, setIsHeroInView] = useState(true);

  return (
    <ScrollContext.Provider value={{ isHeroInView, setIsHeroInView }}>
      {children}
    </ScrollContext.Provider>
  );
};
