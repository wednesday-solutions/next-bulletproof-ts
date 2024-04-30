import { useRouter } from "next/router";
import { useEffect } from "react";
import { i18n, Messages } from "@lingui/core";

export async function loadCatalog(locale: string) {
  const catalog = await import(`@lingui/loader!../translations/${locale}.po`);
  return catalog.messages;
}

export function useLinguiInit(messages: Messages) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale!;
  const isClient = typeof window !== "undefined";

  if (!isClient && locale !== i18n.locale) {
    // there is single instance of i18n on the server
    // note: on the server, we could have an instance of i18n per supported locale
    // to avoid calling loadAndActivate for (worst case) each request, but right now that's what we do
    i18n.loadAndActivate({ locale, messages });
  }
  if (isClient && !i18n.locale) {
    // first client render
    i18n.loadAndActivate({ locale, messages });
  }

  useEffect(() => {
    const localeDidChange = locale !== i18n.locale;
    if (localeDidChange) {
      i18n.loadAndActivate({ locale, messages });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return i18n;
}
