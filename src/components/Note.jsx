import React from "react";
import notesService from "../services/notes/notesService";

const Note = ({ note, onUpdate, setNotes }) => {
  const handleDelete = async () => {
    await notesService.deleteNote(note.id).then(()=>{
      notesService.getAllNote().then((notes)=>{
        setNotes(notes.notes);
      })
    });

  };

  console.log(note.name);

  return (
    <div>
      <h3>{note.name}</h3>
      <p>{note.description}</p>
      <p>{note.important.toString()}</p>
      <p>{note.status}</p>
      <p>{note.due_date}</p>
      <p>{note.created_at}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
