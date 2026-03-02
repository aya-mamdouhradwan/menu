import {NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['en', 'ar'];

export default async function LocaleLayout({children, params}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = (await import(`../../../message/${locale}.json`)).default;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={dir}>{children}</div>
    </NextIntlClientProvider>
  );
}

