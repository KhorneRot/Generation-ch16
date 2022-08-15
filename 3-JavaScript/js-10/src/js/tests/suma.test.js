const suma = require("../suma");

test("sumar 1 + 2 debe ser 3", () => {
  expect(suma(1, 4)).toBe(5);
});

test("1 + 4 no debe ser 0", () => {
  expect(suma(1, 4)).not.toBe(0);
});
