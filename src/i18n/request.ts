import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const localeToUse = locale ?? 'en';
  const messages = (await import(`../../message/${localeToUse}.json`)).default;

  return {
    locale: localeToUse,
    messages
  };
});


