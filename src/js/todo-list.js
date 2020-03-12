function compileTodoItem(text) {
  const regex = /^(?<indentation>[\s]*)- \[(?<checked>[xX]?)[\s]?\](?<content> .*)/;
  const found = text.match(regex);
  if (found != null) {
    const checked = !!found.groups.checked;
    const todoText = found.groups.content;

    return `<li><input disabled=""${checked ? ' checked="" ' : " "}type="checkbox">${todoText}</li>`;
  } else {
    return text;
  }
}

function compileTodoList(match, p1, p2, p3, offset, string) {
  const rows = match.split("\n");
  const compiledRows = rows.map(r => compileTodoItem(r));
  const joinedRows = compiledRows.join("");

  return `<ul>${joinedRows}</ul>`;
}

export function compileNote(text) {
  if (!text) {
    return "";
  }

  return text.replace(/(^([\s]*)- \[([xX]?)[\s]?\] (.*)$[\n]?)+/gm, compileTodoList);
}
