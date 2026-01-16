import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // We only support English, so always return 'en' locale
  // No middleware needed for single-locale setup
  const locale = "en";

  return {
    locale,
    messages: (await import(`../../locales/${locale}`)).default,
  };
});
