import { useState, useEffect } from 'react';

function useApiRequest(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        try {
          const response = await fetch(url);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchData();
    }, [url]);
  
    return {
      data,
      loading,
      error,
    };
}

export default useApiRequest