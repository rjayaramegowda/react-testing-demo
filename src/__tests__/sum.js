// Simple Test

const sum = (x, y) => x + y;

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
});
