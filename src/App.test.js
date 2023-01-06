test("Operations", () => {
  expect(2+2).toBe(4);
  expect(3-1).toBe(2);
  expect(1*3).toBe(3);
  expect(0/0).toBe(NaN);
});
  
test("Equal", () => {
  const data = { name: "UT", age: 27, zodiac: "aries" };
  expect(data).toEqual ({ name: "UT", age: 27, zodiac: "aries" });
  expect(data).toStrictEqual({ name: "UT", age: 27, zodiac: "aries" });
});

test("Null", () => {
  const u = undefined;
  expect(u).toBeUndefined();
  expect(u).not.toBeNull();
  expect(u).toBeFalsy();
});

test("Than", () => {
  expect(0.9999).toBeGreaterThan(0.99);
  expect(0.999).toBe(0.999);
  expect(0.99).toBeLessThan(0.9999);
});

test("contains", () => {
  const data = ['a', 'e', 'i', 'o', 'u'];
  expect(data).toContain('i');
  expect(data).not.toContain('c');
});