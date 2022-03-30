import { useState } from "react";
import { getGif } from "../helpers/getGif";
import { useEffect } from "react";

export const useFecthGifs = (categoria) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      getGif(categoria).then((res) => {
        setstate({
          data: res,
          loading: false,
        });
      });
    }, 1500);
  }, [categoria]);

  return state;
};
