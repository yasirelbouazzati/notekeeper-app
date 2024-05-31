import { useState, useEffect } from "react";
import notesService from "../services/notes/notesService.js";

export const useNote = () => {
  const [note, setNote] = useState([]);
  const handleNote = (newValue) => {
    setNote(newValue);
  };
  const getNote = () => {
    notesService.getAllNote().then((data) => {
      setNote(data.notes);
    });
  };
  useEffect(() => {
    getNote();
  }, []);
  return {
    note,
    handleNote,
  };
};
