import { model } from '@modern-js/runtime/model';

const appModel = model('app').define((_, { use }) => ({
  state: {
    language: '',
  },
  actions: {
    setLanguageSync(state, language) {
      return { ...state, language };
    },
  },
  effects: {
    setLanguage(language) {
      localStorage.setItem('language', language);
      const [, actions] = use(appModel);
      actions.setLanguageSync(language);
    },
  },
}));

export default appModel;
