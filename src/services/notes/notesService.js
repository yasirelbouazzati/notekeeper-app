const baseUrl = `${import.meta.env.VITE_URL}`;

const handleResponse = (response) => {
  if (!response.ok) {
    return response.json().then((error) => {
      throw new Error(error.message || "Error desconocido");
    });
  }
  return response.json();
};

const getAllNote = () => {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch((error) => {
      console.error("Error fetching notes:", error);
      throw error;
    });
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
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("Error creating note:", error);
      throw error;
    });
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
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("Error updating note:", error);
      throw error;
    });
};

const deleteNote = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("Error deleting note:", error);
      throw error;
    });
};

export default {
  getAllNote,
  createNote,
  updateNote,
  deleteNote,
};
