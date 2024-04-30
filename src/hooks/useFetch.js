import { useEffect, useState } from "react";

export const useFetch = (initial, endpoint) => {
  const [data, setData] = useState(initial);
  useEffect(() => {
    const getData = fetch(endpoint);
    getData
      .then((res) => {
        res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endpoint]);

  return data;
};
