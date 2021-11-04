import {
  createApp,
  createStore,
  useLocalModel,
} from '@modern-js/runtime/model';

const store = createStore();

const { Provider } = createApp({});

export { store, Provider, useLocalModel };
