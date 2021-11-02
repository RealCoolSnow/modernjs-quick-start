import intl from 'react-intl-universal';
import _ from 'lodash';
import enUS from './locales/en-US.json';
import zhCN from './locales/zh-CN.json';

const SUPPORT_LOCALES = {
  'en-US': enUS,
  'zh-CN': zhCN,
};

const loadLocales = (): Promise<void> => {
  let currentLocale = intl.determineLocale({
    urlLocaleKey: 'lang',
    cookieLocaleKey: 'lang',
  });
  // 如果没找到，则默认为汉语
  if (!_.find(SUPPORT_LOCALES, currentLocale)) {
    currentLocale = 'zh-CN';
  }
  return intl.init({
    currentLocale,
    locales: SUPPORT_LOCALES,
  });
};

export { loadLocales, SUPPORT_LOCALES };
