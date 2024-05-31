import { useState } from "react";

export const useUpdateForm = (initialValues) => {
  const [name, setName] = useState(initialValues.name);
  const [description, setDescription] = useState(initialValues.description);
  const [important, setImportant] = useState(initialValues.important);
  const [status, setStatus] = useState(initialValues.status);
  const [due_Date, setDue_Date] = useState(initialValues.due_Date);

  const handleNameValue = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionValue = (event) => {
    setDescription(event.target.value);
  };

  const handleImportantValue = (event) => {
    setImportant(event.target.value);
  };

  const handleStatusValue = (event) => {
    setStatus(event.target.value);
  };

  const handleDue_DataValue = (event) => {
    setDue_Date(event.target.value);
  };

  return {
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
  };
};
