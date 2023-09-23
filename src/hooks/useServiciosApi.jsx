import React, { useState, useEffect } from 'react';

const useServiciosApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
};

export default useServiciosApi;
