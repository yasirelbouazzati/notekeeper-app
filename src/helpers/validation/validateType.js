function validateType(note) {
  if (
    typeof note.name === "string" &&
    typeof note.description === "string" &&
    typeof note.important === "boolean" &&
    typeof note.status === "string" &&
    typeof note.due_date === "string"
  ) {
    return true;
  } else {
    return false;
  }
}

export default validateType;
