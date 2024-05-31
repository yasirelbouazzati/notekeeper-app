import notesService from "../services/notes/notesService";

export const DeleteNoteButton = ({ noteId, noteName, setNote }) => {
  const handleAlertDelete = () => {
    if (confirm(`Are you sure about deleting ${noteName} ?`)) {
      notesService.deleteNote(noteId).then(() => {
        notesService.getAllNote().then((notes) => {
          setNote(notes.notes);
        });
      });
    }
  };

  return (
    <span>
      <button onClick={handleAlertDelete}>
        <b>Delete</b>
      </button>
    </span>
  );
};
