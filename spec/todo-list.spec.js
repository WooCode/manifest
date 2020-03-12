import { compileNote } from "../src/js/todo-list";

test("Does nothing when just regular text.", () => {
  expect(compileNote("hello")).toBe("hello");
});

test("Creates todo list of one item.", () => {
  expect(compileNote("- [ ] foo")).toBe('<ul><li><input disabled="" type="checkbox"> foo</li></ul>');
});

test("Creates todo list of one checked item, lower case x.", () => {
  expect(compileNote("- [x] foo")).toBe('<ul><li><input disabled="" checked="" type="checkbox"> foo</li></ul>');
});

test("Creates todo list of one checked item, upper case x.", () => {
  expect(compileNote("- [X] foo")).toBe('<ul><li><input disabled="" checked="" type="checkbox"> foo</li></ul>');
});

test("Creates todo list of two items", () => {
  expect(compileNote("- [ ] foo\n- [ ] bar")).toBe('<ul><li><input disabled="" type="checkbox"> foo</li><li><input disabled="" type="checkbox"> bar</li></ul>');
});
