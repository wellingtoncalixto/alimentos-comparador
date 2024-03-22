import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    let error;
    try {
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      error = err.message ? err.message : err;
    } finally {
      setData(json);
      setLoading(false);
      return { response, json, error };
    }
  }, []);

  return { data, loading, request };
};

export default useFetch;
