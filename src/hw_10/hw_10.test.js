import { reg } from "./hw_10";
import { reg1 } from "./hw_10";
import { reg2 } from "./hw_10";

test("matches date", () => {
  expect("23.05.1996").toMatch(reg);
});

test("matches email", () => {
  expect("john@gmail.com").toMatch(reg1);
});

test("matches tel number", () => {
  expect("+7 969 967-09-99").toMatch(reg2);
});
