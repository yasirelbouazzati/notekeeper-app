import { useState } from "react";

export const useCreateForm = () => {
  const [newName, setName] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newImportant, setImportant] = useState("");
  const [newStatus, setStatus] = useState("");
  const [newDue_Date, setDue_Date] = useState("");

  const handleNewNameValue = (event) => {
    setName(event.target.value);
  };

  const handleNewDescriptionValue = (event) => {
    setDescription(event.target.value);
  };

  const handleNewImportantValue = (event) => {
    setImportant(event.target.value);
  };

  const handleNewStatusValue = (event) => {
    setStatus(event.target.value);
  };
  const handleNewDue_DataValue = (event) => {
    setDue_Date(event.target.value);
  };
  return {
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
  };
};
