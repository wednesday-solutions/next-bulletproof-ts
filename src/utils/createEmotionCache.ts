import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

/**
 * Creates an Emotion cache for server-side rendering and client-side hydration.
 * On the client side, creates a meta tag at the top of the <head> and sets it as insertionPoint.
 * This assures that MUI styles are loaded first and allows developers to easily override MUI styles with other styling solutions, like CSS modules.
 * @returns {EmotionCache} The Emotion cache instance.
 */
export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
}
