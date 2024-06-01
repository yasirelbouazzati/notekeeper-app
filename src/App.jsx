import { useState } from "react";
import { useNote } from "./hooks";
import { NoteList } from "./components/NoteList";
import { CreateNoteForm } from "./components/CreateNoteForm";
import "./App.css";
const App = () => {
  const [, setUpdateFlag] = useState(false);
  const { note, handleNote } = useNote();

  const handleUpdate = () => {
    setUpdateFlag((prevFlag) => !prevFlag);
  };

  return (
    <div>
      <h1>NOTES FORM</h1>
      <CreateNoteForm
        onCreate={handleUpdate}
        note={note}
        setNote={handleNote}
      />
      <NoteList note={note} setNote={handleNote} />
    </div>
  );
};

export default App;
