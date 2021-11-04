import { getCurrentLocale, getSupportLocales } from '@/locale';

const LocaleSwitch = () => {
  const onSelectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    window.location.search = `?lang=${lang}`;
  };
  const currentLocale = getCurrentLocale();
  return (
    <select onChange={onSelectLanguage} defaultValue={currentLocale}>
      {getSupportLocales().map(locale => (
        <option key={locale.value} value={locale.value}>
          {locale.name}
        </option>
      ))}
    </select>
  );
};

export default LocaleSwitch;
