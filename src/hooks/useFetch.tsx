import { useCallback, useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [items, setItems] = useState<{}[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return { items, loading, error };
};

export default useFetch;
