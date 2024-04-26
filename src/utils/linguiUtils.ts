import { useRouter } from "next/router";
import { useEffect } from "react";
import { i18n, Messages } from "@lingui/core";

/**
 * Loads the message catalog for the specified locale asynchronously.
 * @param {string} locale - The locale for which to load the catalog.
 * @returns {Promise<Object>} A promise that resolves to the message catalog for the specified locale.
 */
export async function loadCatalog(locale: string) {
  const catalog = await import(`@lingui/loader!../translations/${locale}.po`);
  return catalog.messages;
}

/**
 * Custom hook for initializing Lingui i18n instance based on provided messages and locale.
 * @param {Messages} messages - The messages object containing translations for the locale.
 * @returns {i18n} The Lingui i18n instance.
 */
export function useLinguiInit(messages: Messages) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale!;
  const isClient = typeof window !== "undefined";

  const loadAndActivateIfNeeded = (newLocale: string) => {
    if (newLocale !== i18n.locale) {
      i18n.loadAndActivate({ locale, messages });
    }
  };

  const initializeI18n = () => {
    if (isClient && !i18n.locale) {
      // first client render
      loadAndActivateIfNeeded(locale);
    } else if (!isClient) {
      // server-side render
      loadAndActivateIfNeeded(locale);
    }
  };

  useEffect(() => {
    loadAndActivateIfNeeded(locale);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  initializeI18n();

  return i18n;
}
