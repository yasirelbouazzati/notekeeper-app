import validateEnum from "../helpers/validation/validateEnum";
import validateNonEmpty from "../helpers/validation/validateNonEmpty";
import validateType from "../helpers/validation/validateType";
import notesService from "../services/notes/notesService";
import { useCreateForm } from "../hooks";
import "./CreateNoteForm.css";

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
        setNote((prevNotes) => [...prevNotes, data]);
      });
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2>Add a New Note:</h2>
        <form onSubmit={addNewNote}>
          <div className="form-group">
            <label htmlFor="new-Name">Name:</label>
            <input
              id="new-Name"
              type="text"
              value={newName}
              onChange={handleNewNameValue}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-Description">Description:</label>
            <input
              id="new-Description"
              type="text"
              value={newDescription}
              onChange={handleNewDescriptionValue}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-Important">Important:</label>
            <input
              type="checkbox"
              id="new-Important"
              checked={newImportant}
              onChange={handleNewImportantValue}
              className="form-check-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-Status">
              Status (In Progress/Pending/Done):
            </label>
            <input
              id="new-Status"
              type="text"
              value={newStatus}
              onChange={handleNewStatusValue}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-Due_Date">Due Date (MM/DD/YYYY):</label>
            <input
              id="new-Due_Date"
              type="date"
              value={newDue_Date}
              onChange={handleNewDue_DataValue}
              className="form-control"
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
