
import React, { useState } from 'react';
import notesService from '../services/notes/notesService';

const CreateNoteForm = ({ onCreate }) => {
  const [note, setNote] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await notesService.createNote(note);
    onCreate();
    setNote({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={note.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="description"
        value={note.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button type="submit">Create Note</button>
    </form>
  );
};

export default CreateNoteForm;

