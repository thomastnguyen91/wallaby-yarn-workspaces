import foo from "@private-package/foo-foo";

describe("test", () => {
  it("should pass when a is 1", () => {
    expect(foo).toEqual(1);
  });

  it("should pass when a is 2", () => {
    expect(foo).toEqual(2);
  });
});
