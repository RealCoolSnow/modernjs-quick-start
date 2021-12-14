import React, { useState } from 'react';
import { Route, Switch } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import { getCurrentLocale, loadLocales } from './locale';
import { Provider } from './store';
import appModel from './store/models/app-model';
import routes from '@/routes';
import '@/styles/main.css';

const App = () => {
  const [localeLoaded, setLocaleLoaded] = useState(false);
  const [, actions] = useModel(appModel);
  // eslint-disable-next-line promise/prefer-await-to-then
  loadLocales().then(() => {
    setLocaleLoaded(true);
    actions.setLanguage(getCurrentLocale());
  });
  return (
    <Provider>
      {localeLoaded && (
        <div className="px-4 py-10 text-center text-gray-700 dark:text-gray-500">
          <Switch>
            {routes.map(route => (
              <Route exact={true} key={route.path} path={route.path}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </div>
      )}
    </Provider>
  );
};
// eslint-disable-next-line no-console
console.log('app created');

export default App;
