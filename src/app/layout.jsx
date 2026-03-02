import './globals.css';
import {cookies} from 'next/headers';

export const metadata = {
  title: 'Minu Restaurant',
  description:
    'Browse fresh seafood, premium grills, quick bites and drinks at Minu restaurant with a simple, modern interface.',
};

export default async function RootLayout({children}) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
  const locale = localeCookie === 'ar' ? 'ar' : 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        {children}
      </body>
    </html>
  );
}


