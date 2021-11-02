import React, { useState } from 'react';
import { Route, Switch } from '@modern-js/runtime/router';
import { loadLocales } from './locale';
import routes from '@/routes';
import '@/styles/main.css';

const App = () => {
  const [localeLoaded, setLocaleLoaded] = useState(false);
  // eslint-disable-next-line promise/prefer-await-to-then
  loadLocales().then(() => {
    setLocaleLoaded(true);
  });
  return (
    localeLoaded && (
      <div className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <Switch>
          {routes.map(route => (
            <Route exact={true} key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </div>
    )
  );
};

export default App;
