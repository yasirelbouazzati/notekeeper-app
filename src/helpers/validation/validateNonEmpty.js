

function validateNonEmpty(note) {
  if (note.name.trim() !== "" && note.description.trim() !== "") {
    return true;
  } else {
    return false;
  }
}

export default validateNonEmpty;
