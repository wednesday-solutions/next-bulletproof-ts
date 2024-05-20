import createEmotionCache from "../createEmotionCache";

describe("createEmotionCache", () => {
  let originalDocument;

  beforeAll(() => {
    originalDocument = global.document;
  });

  afterEach(() => {
    global.document = originalDocument; // Restore the original document after each test
  });

  it("should create a cache object with the correct key", () => {
    const cache = createEmotionCache();
    expect(cache.key).toBe("mui-style");
  });

  it("should set insertionPoint to undefined when running on the server", () => {
    global.document = undefined;
    const cache = createEmotionCache();
    expect(cache.sheet.insertionPoint).toBeUndefined();
  });

  it("should set insertionPoint to the emotion-insertion-point meta tag when running on the client", () => {
    const emotionInsertionPoint = document.createElement("meta");
    emotionInsertionPoint.name = "emotion-insertion-point";
    document.head.appendChild(emotionInsertionPoint);
    
    const cache = createEmotionCache();
    
    expect(cache.sheet.insertionPoint).toBe(emotionInsertionPoint);

    document.head.removeChild(emotionInsertionPoint);
  });

  it("should set insertionPoint to undefined when emotion-insertion-point meta tag is not found", () => {
    global.document = {};
    const cache = createEmotionCache();
    expect(cache.sheet.insertionPoint).toBeUndefined();
  });
});
