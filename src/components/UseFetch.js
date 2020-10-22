import { useState, useEffect } from "react";

const useFetch = (url, _options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const doFetch = async (options = _options) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doFetch();
  }, [isLoading]);
  return {
    response: data,
    error,
    isLoading
  };
};
export default useFetch;
