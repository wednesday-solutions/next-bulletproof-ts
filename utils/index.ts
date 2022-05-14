import pickBy from "lodash/pickBy";
import screenSizes from "@themes/media";

export const mapKeysDeep = (obj, fn) =>
  Array.isArray(obj)
    ? obj.map(val => mapKeysDeep(val, fn))
    : typeof obj === "object"
    ? Object.keys(obj).reduce((acc, current) => {
        const key = fn(current);
        const val = obj[current];
        acc[key] = val !== null && typeof val === "object" ? mapKeysDeep(val, fn) : val;
        return acc;
      }, {})
    : obj;

export const isLocal = () => {
  try {
    const local = JSON.parse(process.env.IS_LOCAL ?? "false");
    return typeof local === "boolean" && local;
  } catch {
    // continue regardless of error
  }
  return false;
};

export function getQueryStringValue(keys) {
  const queryString = {};
  try {
    keys.forEach(key => {
      queryString[key] = decodeURIComponent(
        window.location.search.replace(
          new RegExp(
            `^(?:.*[&\\?]${encodeURIComponent(key).replace(/[.+*]/g, "\\$&")}(?:\\=([^&]*))?)?.*$`,
            "i"
          ),
          "$1"
        )
      );
    });
    // eslint-disable-next-line
    return pickBy(queryString);
  } catch (error) {
    return null;
  }
}

export const setDeviceType = (width = document.body.clientWidth) => {
  if (width >= screenSizes.mobile && width < screenSizes.tablet) {
    return "mobile";
  } else if (width >= screenSizes.tablet && width < screenSizes.desktop) {
    return "tablet";
  } else {
    return "desktop";
  }
};

export const getDeviceType = device => (device || setDeviceType()).toUpperCase();
export { default as commonPropTypes } from "./commonPropTypes";
