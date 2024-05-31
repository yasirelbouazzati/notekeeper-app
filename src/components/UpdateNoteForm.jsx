
import React, { useState, useEffect } from 'react';
import { updateNote } from '../services/notesService';

const UpdateNoteForm = ({ noteId, onUpdate }) => {
  const [note, setNote] = useState({ name: '', description: '' });

  useEffect(() => {
   
    const fetchNote = async () => {
      const fetchedNote = await getNoteById(noteId); 
      setNote(fetchedNote);
    };
    fetchNote();
  }, [noteId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNote(noteId, note);
    onUpdate();
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
      <button type="submit">Update Note</button>
    </form>
  );
};

export default UpdateNoteForm;