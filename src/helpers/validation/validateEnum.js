const allowedStatus = ["pending", "in progress", "done"];

function validateEnum(note) {
  if (allowedStatus.includes(note)) {
    return true;
  } else {
    return false;
  }
}

console.log(validateEnum("pending"));

export default validateEnum;
