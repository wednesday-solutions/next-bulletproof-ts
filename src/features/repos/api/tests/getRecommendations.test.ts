import { IResponse } from "../getRecommendations";

describe("IResponse", () => {
  it("should have the correct properties", () => {
    const response: IResponse = {
      incompleteResults: false,
      items: [
        {
          id: 1,
          name: "repo1",
          fullName: "description1",
          stargazersCount: 10,
          owner : {
            login: "login1",
          },
        },
      ],
      totalCount: 1,
    };

    expect(response).toHaveProperty("incompleteResults");
    expect(response).toHaveProperty("items");
    expect(response.items).toBeInstanceOf(Array);
    expect(response).toHaveProperty("totalCount");
  });

  it("should handle empty items array", () => {
    const response: IResponse = {
      incompleteResults: false,
      items: [],
      totalCount: 0,
    };

    expect(response.items).toHaveLength(0);
    expect(response.totalCount).toBe(0);
  });

  it("should handle incompleteResults flag", () => {
    const response: IResponse = {
      incompleteResults: true,
      items: [
        {
          id: 1,
          name: "repo1",
          fullName: "description1",
          stargazersCount: 10,
          owner : {
            login: "login1",
          }
        },
      ],
      totalCount: 100,
    };

    expect(response.incompleteResults).toBe(true);
    expect(response.totalCount).toBeGreaterThan(response.items.length);
  });
});
