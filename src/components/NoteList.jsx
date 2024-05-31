
import React, { useEffect, useState } from "react";
import notesService from "../services/notes/notesService";
import Note from "./Note.jsx";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = () => {
      notesService.getAllNote().then(data => {
        setNotes(data.notes);
        console.log(notes);
      });
    };
    fetchNotes();
  }, []);

  return (
    <div>
      {notes.length > 0 ? (
        notes.map((note) => <Note key={note.id} note={note} setNotes={setNotes} />)
      ) : (
        <p>Empty List</p>
      )}
    </div>
  );
};

export default NotesList;
