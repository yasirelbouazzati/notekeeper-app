import { expect, test } from "vitest";
import validateType from "../validateType";

test("Validating note object types", () => {
  const validNote = {
    name: "Valid Note",
    description: "This is a valid note",
    important: true,
    status: "pending",
    due_date: "2024-05-15",
  };

  const invalidNote = {
    name: "Invalid Note",
    description: "This is an invalid note",
    important: "true",
    status: "pending",
    due_date: "2024-05-15",
  };

  expect(validateType(validNote)).toBe(true);
  expect(validateType(invalidNote)).toBe(false);
});
