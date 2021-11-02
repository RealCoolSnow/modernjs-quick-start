import React, { useState } from 'react';
import intl from 'react-intl-universal';
import { loadLocales } from './locale';
import '@/styles/main.css';

const App = () => {
  const [localeLoaded, setLocaleLoaded] = useState(false);
  // eslint-disable-next-line promise/prefer-await-to-then
  loadLocales().then(() => {
    setLocaleLoaded(true);
  });
  return localeLoaded && <div>{intl.get('hello')}</div>;
};

export default App;
