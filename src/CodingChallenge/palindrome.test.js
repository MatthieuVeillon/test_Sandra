import { palindrome } from "./palindrome";

describe("palindrome", () => {
  it("should check palindrome", () => {
    expect(palindrome("Race car")).toBe(true);
    expect(palindrome("not a palindrome")).toBe(false);
    expect(palindrome("a man a plan a canal panama")).toBe(true);
  });
});
