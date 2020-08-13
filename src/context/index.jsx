/* eslint-disable react/prop-types */
import React, {
  useEffect,
  useState,
  createContext,
  useContext as useCtx
} from 'react';

export const Context = createContext();
export const useContext = () => useCtx(Context);

const ContextProvider = ({ children }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWidth = () => {
      if (window) {
        setWidth(window.innerWidth);
      }
    };

    handleWidth();

    window.addEventListener('resize', handleWidth);

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  const values = {
    width
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
