import validateEnum from "../helpers/validation/validateEnum";
import validateNonEmpty from "../helpers/validation/validateNonEmpty";
import validateType from "../helpers/validation/validateType";
import notesService from "../services/notes/notesService";
import { useCreateForm } from "../hooks";
export const CreateNoteForm = ({ note, setNote }) => {
  const {
    newName,
    newDescription,
    newImportant,
    newStatus,
    newDue_Date,
    handleNewNameValue,
    handleNewDescriptionValue,
    handleNewImportantValue,
    handleNewStatusValue,
    handleNewDue_DataValue,
  } = useCreateForm();
  const addNewNote = (event) => {
    event.preventDefault();
    const newNote = {
      name: newName,
      description: newDescription,
      important: Boolean(newImportant),
      status: newStatus,
      due_date: newDue_Date,
    };
    if (
      validateType(newNote) &&
      validateNonEmpty(newNote) &&
      validateEnum(newNote.status)
    ) {
      notesService.createNote(newNote).then((data) => {
        setNote([...note, data]);
      });
    }
  };
  return (
    <div className="container">
      <h2>Add a New Note:</h2>
      <form onSubmit={addNewNote}>
        <div className="form-group">
          <label htmlFor="new-Name">Name:</label>
          <input
            id="new-Name"
            value={newName}
            onChange={handleNewNameValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-Description">Description:</label>
          <input
            id="new-Description"
            value={newDescription}
            onChange={handleNewDescriptionValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-Important">Important:</label>
          <input
            id="new-Important"
            value={newImportant}
            onChange={handleNewImportantValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-Status">Status:</label>
          <input
            id="new-Status"
            value={newStatus}
            onChange={handleNewStatusValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-Due_Date">Due Date:</label>
          <input
            id="new-Due_Date"
            value={newDue_Date}
            onChange={handleNewDue_DataValue}
            className="form-control"
          />
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
