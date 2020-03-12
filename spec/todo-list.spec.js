import { compileNote } from "../src/js/todo-list";

test("Does nothing when just regular text.", () => {
  expect(compileNote("hello")).toBe("hello");
});

test("Creates todo list of one item.", () => {
  expect(compileNote("- [ ] foo")).toBe('<ul><li><input type="checkbox"> foo</li></ul>');
});

test("Creates todo list of one checked item, lower case x.", () => {
  expect(compileNote("- [x] foo")).toBe('<ul><li><input checked="" type="checkbox"> foo</li></ul>');
});

test("Creates todo list of one checked item, upper case x.", () => {
  expect(compileNote("- [X] foo")).toBe('<ul><li><input checked="" type="checkbox"> foo</li></ul>');
});

test("Creates todo list of two items", () => {
  expect(compileNote("- [ ] foo\n- [ ] bar")).toBe('<ul><li><input type="checkbox"> foo</li><li><input type="checkbox"> bar</li></ul>');
});

test("Create empty note on empty input", () => {
  expect(compileNote(null)).toBe("");
  expect(compileNote(undefined)).toBe("");
  expect(compileNote("")).toBe("");
});
