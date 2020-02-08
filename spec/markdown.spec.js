import { compileMarkdown } from "../src/js/markdown";

test("does nothing when just regular text", () => {
  expect(compileMarkdown("hello")).toBe("hello");
});

test("wraps text in `<strong>` tags when surrounded by `*`", () => {
  expect(compileMarkdown("*hello*")).toBe("<strong>*hello*</strong>");
});
