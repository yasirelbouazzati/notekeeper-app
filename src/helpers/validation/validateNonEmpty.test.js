import { expect, test } from "vitest";

import validateNonEmpty from "./validateNonEmpty.js";

test("Validating non-empty note fields", () => {
  const validNote = {
    name: "Valid Note",
    description: "This is a valid note",
    important: true,
    status: "pending",
    due_date: "2024-05-15",
  };

  const invalidNote = {
    name: "",
    description: "This is an invalid note",
    important: true,
    status: "pending",
    due_date: "2024-05-15",
  };

  expect(validateNonEmpty(validNote)).toBe(true);
  expect(validateNonEmpty(invalidNote)).toBe(false);
});
