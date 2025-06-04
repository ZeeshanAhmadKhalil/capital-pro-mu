const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
const baseUrlLocal = process.env.NEXT_PUBLIC_APP_BASE_URL_LOCAL;

const isProduction = process.env.NODE_ENV === 'production';

export { baseUrl, baseUrlLocal, isProduction };
