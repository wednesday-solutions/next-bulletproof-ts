/* eslint-disable security/detect-object-injection */
/* eslint-disable security/detect-non-literal-regexp */
import pickBy from "lodash-es/pickBy";
import camelCase from "lodash-es/camelCase";
import { set } from "lodash";

export const mapKeysDeep = (obj, fn) => {
  if (Array.isArray(obj)) {
    return obj.map(val => mapKeysDeep(val, fn));
  } else if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).reduce((acc, current) => {
      const key = fn(current);
      const val = obj[current];
      acc[key] = val !== null && typeof val === "object" ? mapKeysDeep(val, fn) : val;
      return acc;
    }, {});
  } else {
    return obj;
  }
};

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
      const safeKey = encodeURIComponent(key).replace(/[.+*]/g, "\\$&");
      const regex = new RegExp(`^(?:.*[&\\?]${safeKey}(?:\\=([^&]*))?)?.*$`, "i");
      const value = decodeURIComponent(window.location.search.replace(regex, "$1"));

      if (value) {
        set(queryString, safeKey, value); // Using safeKey instead of key directly
      }
    });

    return pickBy(queryString);
  } catch (error) {
    console.log("An error occurred while getting the query string value", error);
  }
}

/**
 * Converts an object's keys to camelCase, takes reference to the object
 * @param obj the object whose keys to convert
 */
export const convertObjectToCamelCase = <T>(obj: Record<string, unknown>): T => {
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    throw new Error("The type of value passed in must be an object's reference");
  }

  Object.keys(obj).forEach(key => {
    const camelKey = camelCase(key);
    if (camelKey !== key) {
      obj[camelKey] = obj[key];
      delete obj[key];
    }
  });

  return obj as T;
};
