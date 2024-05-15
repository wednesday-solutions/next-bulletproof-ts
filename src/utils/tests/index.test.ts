import camelCase from "lodash/camelCase";
import { isLocal, mapKeysDeep, convertObjectToCamelCase } from "../index";



describe("Tests for mapKeysDeep function", () => {
  let fn;
  beforeAll(() => {
    fn = keys => camelCase(keys);
  });
  it("should return something objet", () => {
    const obj = {
      locationone: "/route1",
      locationtwo: "/route2",
      locationthree: { locationone: "/route1", locationtwo: "/route2" },
    };
    expect(mapKeysDeep(obj, fn)).toEqual(obj);
  });

  it("should operate array accordingly", () => {
    const arr = [{ locationone: "/route1", locationtwo: "/route2" }];
    expect(mapKeysDeep(arr, fn)).toEqual(arr);
  });

  it("should return the passed value if its not an array or object", () => {
    expect(mapKeysDeep("None", fn)).toEqual("None");
  });
});
describe("Tests for isLocal method", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("should return true if process.env.IS_LOCAL is true", () => {
    process.env.IS_LOCAL = "true";
    expect(isLocal()).toBe(true);
  });
  it("should return false if when process.env.IS_LOCAL is not present", () => {
    expect(isLocal()).toBe(false);
  });
  it("should return false if process.env.IS_LOCAL has exceptional value", () => {
    process.env.IS_LOCAL = "trusae";
    expect(isLocal()).toBe(false);
  });
});

describe("Tests for convertObjectToCamelCase", () => {
  it("should throw an error if incorrect type is provided", () => {
    expect(() => {
      // @ts-expect-error we are checking if it throws an error if an array is passed instead of an object
      // this causes TypeScript to throw an error since it can't take an array
      convertObjectToCamelCase(["hey"]);
    }).toThrow();
  });

  it("should convert the object's keys into camelCase", () => {
    const camelObject = {
      thisIsCamel: "statement",
      anotherCamel: "statement",
    };

    const snakeObject = {
      this_is_camel: "statement",
      another_camel: "statement",
    };

    const returnCamelObject = convertObjectToCamelCase<typeof camelObject>(snakeObject);


    const cKeys = Object.keys(camelObject);
    const rKeys = Object.keys(returnCamelObject);

    expect(cKeys[0]).toEqual(rKeys[0]);
    expect(cKeys[1]).toEqual(rKeys[1]);
  });
});