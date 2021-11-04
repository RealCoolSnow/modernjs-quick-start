import intl from 'react-intl-universal';
import _ from 'lodash';
import enUS from './locales/en-US.json';
import zhCN from './locales/zh-CN.json';

const SUPPORT_LOCALES = [
  {
    name: 'English',
    value: 'en-US',
  },
  {
    name: '简体中文',
    value: 'zh-CN',
  },
];

const LOCALES = {
  'en-US': enUS,
  'zh-CN': zhCN,
};

const DEFAULT_LOCALE = 'en-US';

let currentLocale = DEFAULT_LOCALE;

const loadLocales = (): Promise<void> => {
  // 侦测语言
  currentLocale = intl.determineLocale({
    urlLocaleKey: 'lang',
    cookieLocaleKey: 'lang',
  });
  if (!_.find(SUPPORT_LOCALES, { value: currentLocale })) {
    currentLocale = DEFAULT_LOCALE;
  }
  return intl.init({
    currentLocale,
    locales: LOCALES,
  });
};

const getCurrentLocale = (): string => currentLocale;

const getSupportLocales = () => SUPPORT_LOCALES;

export { loadLocales, getCurrentLocale, getSupportLocales };
