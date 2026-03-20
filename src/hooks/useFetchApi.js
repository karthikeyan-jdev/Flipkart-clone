import { useState, useEffect } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController(); //mounted/unmounted check
    const signal = controller.signal;
    setData(null);
    setLoading(true);
    setError("");
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error!:${res.status}`);
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message || "API Error");
      })
      .finally(() => {
        if (!signal.aborted) { 
          setLoading(false);
        }
      });

    return () => controller.abort(); 
  }, [url]);
  return {
    data,
    error,
    loading,
  };
};

export default useFetchApi;
