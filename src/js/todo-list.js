function compileRow(text) {
  if (text.startsWith("- [ ]")) {
    const todoText = text.substring("- [ ]".length);
    return `<ul><li><input disabled="" type="checkbox">${todoText}</li></ul>`;
  } else {
    return text;
  }
}

export function compileTodoList(text) {
  const rows = text.split("\n");
  const compiledRows = rows.map(r => compileRow(r));
  const joinedRows = compiledRows.join("\n");
  return joinedRows;
}
