const baseUrl = `${import.meta.env.VITE_URL}`;

const getAllNote = () => {
  return fetch(baseUrl).then((response) => response.json());
};

const createNote = (newNote) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newNote.name,
      description: newNote.description,
      important: newNote.important,
      status: newNote.status,
      due_date: newNote.due_date,
    }),
  }).then((response) => response.json());
};

const updateNote = (id, name, description, important, status, due_Date) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      description: description,
      important: important,
      status: status,
      due_date: due_Date,
    }),
  }).then((response) => response.json());
};

const deleteNote = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export default {
  getAllNote: getAllNote,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
};
