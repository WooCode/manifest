let index = 0;
let indexToUpdate = 0;

function compileTodoItem(text) {
  const regex = /^(?<indentation>[\s]*)- \[(?<checked>[xX]?)[\s]?\](?<content> .*)/;
  const found = text.match(regex);
  if (found != null) {
    const checked = !!found.groups.checked;
    const todoText = found.groups.content;

    index++;
    return `<li><input${checked ? ' checked="" ' : " "}type="checkbox" checkbox-id="${index}">${todoText}</li>`;
  } else {
    return text;
  }
}

function updateTodoText(text) {
  const regex = /^(?<indentation>[\s]*)- \[(?<checked>[xX]?)[\s]?\](?<content> .*)/;
  const found = text.match(regex);
  if (found != null) {
    let checked = !!found.groups.checked;
    const todoText = found.groups.content;
    const indentation = found.groups.indentation;

    index++;
    if (index === indexToUpdate) checked = !checked;
    return `${indentation}- [${checked ? "x" : " "}]${todoText}`;
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

function updateToDoList(match, p1, p2, p3, offset, string) {
  const rows = match.split("\n");
  const compiledRows = rows.map(r => updateTodoText(r));
  const joinedRows = compiledRows.join("\n");

  return joinedRows;
}

export function compileNote(text) {
  if (!text) {
    return "";
  }

  index = 0;

  return text.replace(/(^([\s]*)- \[([xX]?)[\s]?\] (.*)$[\n]?)+/gm, compileTodoList);
}

export function updateNote(text, id) {
  if (!text) {
    return "";
  }

  index = 0;
  indexToUpdate = parseInt(id);

  return text.replace(/(^([\s]*)- \[([xX]?)[\s]?\] (.*)$[\n]?)+/gm, updateToDoList);
}
