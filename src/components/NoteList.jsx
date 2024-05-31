import { Note } from "./Note";
export const NoteList = ({ note, setNote }) => {
  return (
    <div>
      {note.length > 0 ? (
        <Note note={note} setNote={setNote} />
      ) : (
        <p>Empty List</p>
      )}
    </div>
  );
};
