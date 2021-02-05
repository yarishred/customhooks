import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [data, setData] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setData({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // setTimeout(() => {
          if (isMounted.current) {
            setData({
              loading: false,
              error: null,
              data,
            });
          } else{
              console.log('setState no se llamo')
          }
        // }, 4000);
      })
      .catch(() =>{
        setData({
          data:null,
          loading: false,
          error: 'No se pudo cargar la info'
        })
      })
  }, [url]);

  return data;
};
