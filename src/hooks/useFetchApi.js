import { useState, useEffect } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let ismounted = true;
    setData(null);
    setLoading(true);
    setError("");
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error!:${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (ismounted) setData(data);
      })
      .catch((err) => {
        if (ismounted) setError(err.message || "API Error");
      })
      .finally(() => {
        if (ismounted) setLoading(false);
      });
    return () => {
      ismounted = false;
    };
  }, [url]);
  return {
    data,
    error,
    loading,
    status: error ? "error" : loading ? "loading" : data ? "success" : "idle",
  };
};

export default useFetchApi;
