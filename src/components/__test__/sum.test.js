import { sum } from "../sum";

test("testing sum of two numbers", () => {
  const result = sum(3,4);
  expect(result).toBe(5);
});
