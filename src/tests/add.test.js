const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;
test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should print greeting", () => {
  const result = generateGreeting("Karan");
  expect(result).toBe("Hello Karan!");
});
