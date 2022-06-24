import { reactIntl } from "./reactIntl";
import * as NextImage from "next/image";
import "../styles/globals.css";

const OriginalNextImage = NextImage.default;

/**
 * this makes it possible to use Next.js' Image component in components rendered inside Storybook.
 * @refer https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
 */
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: props => (
    <OriginalNextImage
      {...props}
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
      unoptimized
    />
  ),
});

export const parameters = {
  reactIntl,
  locale: reactIntl.defaultLocale,
  locales: {
    en: "English",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
