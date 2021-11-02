import { Switch, Route } from '@modern-js/runtime/router';

import '@/styles/main.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <div className="container">
        <main>
          <p className="text-primary">Hello world!</p>
        </main>
      </div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
