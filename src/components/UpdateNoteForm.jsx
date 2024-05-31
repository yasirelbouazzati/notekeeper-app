import validateEnum from "../helpers/validation/validateEnum";
import validateNonEmpty from "../helpers/validation/validateNonEmpty";
import validateType from "../helpers/validation/validateType";
import notesService from "../services/notes/notesService";
import { useUpdateForm } from "../hooks";
export const UpdateNoteForm = ({
  id,
  setNote,
  noteName,
  noteDescription,
  noteImportant,
  noteStatus,
  noteDue_Date,
  visibilityUpdateForm,
}) => {
  const {
    name,
    description,
    important,
    status,
    due_Date,
    handleNameValue,
    handleDescriptionValue,
    handleImportantValue,
    handleStatusValue,
    handleDue_DataValue,
  } = useUpdateForm({
    name: noteName,
    description: noteDescription,
    important: noteImportant,
    status: noteStatus,
    due_Date: noteDue_Date,
  });
  const editNote = (event) => {
    event.preventDefault();
    const editNote = {
      name: name,
      description: description,
      important: Boolean(important),
      status: status,
      due_date: due_Date,
    };
    if (
      validateType(editNote) &&
      validateNonEmpty(editNote) &&
      validateEnum(editNote.status)
    ) {
      notesService
        .updateNote(
          id,
          editNote.name,
          editNote.description,
          editNote.important,
          editNote.status,
          editNote.due_date,
        )
        .then(() => {
          notesService.getAllNote().then((data) => {
            setNote(data.notes);
          });
        })
        .finally(() => {
          visibilityUpdateForm(false);
        });
    }
  };
  return (
    <div className="container">
      <h2>Edit a Note:</h2>
      <form onSubmit={editNote}>
        <div className="form-group">
          <label htmlFor="Name">Name:</label>
          <input
            id="Name"
            value={name}
            onChange={handleNameValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Description:</label>
          <input
            id="Description"
            value={description}
            onChange={handleDescriptionValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Important">Important:</label>
          <input
            id="Important"
            value={important}
            onChange={handleImportantValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Status">Status:</label>
          <input
            id="Status"
            value={status}
            onChange={handleStatusValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Due_Date">Due Date:</label>
          <input
            id="Due_Date"
            value={due_Date}
            onChange={handleDue_DataValue}
            className="form-control"
          />
        </div>
        <div>
          <button type="submit" className="button">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};
