/* eslint-disable react/prop-types */
import React from 'react';
import ContextProvider from '@context/index';

export const App = ({ Component, pageProps }) => (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
);

export default App;
