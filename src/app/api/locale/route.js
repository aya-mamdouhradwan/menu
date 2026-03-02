import {NextResponse} from 'next/server';

export async function POST(request) {
  const {locale} = await request.json();

  if (!locale) {
    return NextResponse.json({error: 'Missing locale'}, {status: 400});
  }

  const response = NextResponse.json({success: true});
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

