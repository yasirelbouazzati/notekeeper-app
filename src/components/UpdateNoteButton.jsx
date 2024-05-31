import { UpdateNoteForm } from "./UpdateNoteForm";
import { useVisibilityUpdateForm } from "../hooks";

export const UpdateNoteButton = ({
  setNote,
  noteId,
  noteName,
  noteDescription,
  noteImportant,
  noteStatus,
  noteDue_Date,
}) => {
  const { visibilityUpdateForm, handleVisibilityUpdateFormValue } =
    useVisibilityUpdateForm();
  const handleUpdate = () => {
    handleVisibilityUpdateFormValue(true);
  };

  return (
    <span>
      <button onClick={handleUpdate}>
        <b>Update</b>
      </button>
      {visibilityUpdateForm ? (
        <UpdateNoteForm
          id={noteId}
          setNote={setNote}
          noteName={noteName}
          noteDescription={noteDescription}
          noteImportant={noteImportant}
          noteStatus={noteStatus}
          noteDue_Date={noteDue_Date}
          visibilityUpdateForm={handleVisibilityUpdateFormValue}
        />
      ) : (
        ""
      )}
    </span>
  );
};
