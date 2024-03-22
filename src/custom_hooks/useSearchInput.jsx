import React from "react";

const useSearchInput = () => {
  const [value, setValue] = React.useState({});
  const [error, setError] = React.useState(null);

  return {
    value,
    setValue,
    error,
    setError,
  };
};

export default useSearchInput;
