import { useState } from "react";

export const useVisibilityUpdateForm = () => {
  const [visibilityUpdateForm, setVisibilityUpdateForm] = useState(false);

  const handleVisibilityUpdateFormValue = (newValue) => {
    setVisibilityUpdateForm(newValue);
  };

  return {
    visibilityUpdateForm,
    handleVisibilityUpdateFormValue,
  };
};
