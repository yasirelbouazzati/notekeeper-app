import { expect, test } from "vitest";

import validateEnum from "./validateEnum.js";

test("Validating note status enum", () => {
  const validNote = {
    name: "Valid Note",
    description: "This is a valid note",
    important: true,
    status: "pending",
    dueDate: "2024-05-15",
  };

  const invalidNote = {
    name: "Invalid Note",
    description: "This is an invalid note",
    important: true,
    status: "invalidStatus",
    dueDate: "2024-05-15",
  };

  expect(validateEnum(validNote.status)).toBe(true);
  expect(validateEnum(invalidNote.status)).toBe(false);
});
