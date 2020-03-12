import { compileTodoList } from "../src/js/todo-list";

test("Does nothing when just regular text.", () => {
  expect(compileTodoList("hello")).toBe("hello");
});

test("Creates todo list of one item.", () => {
  expect(compileTodoList("- [ ] foo")).toBe('<ul><li><input disabled="" type="checkbox"> foo</li></ul>');
});

test("Creates todo list of one checked item, lower case x.", () => {
  expect(compileTodoList("- [x] foo")).toBe('<ul><li><input disabled="" checked="" type="checkbox"> foo</li></ul>');
});

test("Creates todo list of one checked item, upper case x.", () => {
  expect(compileTodoList("- [X] foo")).toBe('<ul><li><input disabled="" checked="" type="checkbox"> foo</li></ul>');
});
