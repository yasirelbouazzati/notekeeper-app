
import React, { useState } from "react";
import NoteList from "./components/NoteList";
import CreateNoteForm from "./components/CreateNoteForm";

const App = () => {
  const [updateFlag, setUpdateFlag] = useState(false);

  const handleUpdate = () => {
    setUpdateFlag((prevFlag) => !prevFlag);
  };

  return (
    <div>
      <h1>Notekeeper App</h1>
      <CreateNoteForm onCreate={handleUpdate} />
      <NoteList />
    </div>
  );
};

export default App;
