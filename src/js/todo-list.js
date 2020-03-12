function compileRow(text) {
  const regex = /^(?<indentation>[\s]*)- \[(?<checked>[xX]?)[\s]?\](?<content> .*)/;
  const found = text.match(regex);
  if (found != null) {
    const checked = !!found.groups.checked;
    const todoText = found.groups.content;
    return `<ul><li><input disabled=""${checked ? ' checked="" ' : " "}type="checkbox">${todoText}</li></ul>`;
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
