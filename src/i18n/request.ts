import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // For now, we only support English
  // In the future, this can be expanded to detect locale from URL, cookies, or headers
  const locale = "en";

  return {
    locale,
    messages: (await import(`../../locales/${locale}`)).default,
  };
});
