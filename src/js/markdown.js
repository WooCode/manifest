function compileRow(text) {
  return `<strong>${text}</strong>`;
}

export function compileMarkdown(text) {
  const rows = text.split("\n");
  const compiledRows = rows.map(r => compileRow(r));
  const joinedRows = compiledRows.join("\n");
  return joinedRows;
}
