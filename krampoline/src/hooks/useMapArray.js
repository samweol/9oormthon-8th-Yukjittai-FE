import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useMapArray() {
  const [{ data, isLoading, isError }, setArrayInfo] = useState({
    data: undefined,
    isLoading: false,
    isError: false,
  });
  const { keyword } = useParams();

  useEffect(() => {
    try {
      if (!window?.kakao) return;
      const { kakao } = window;

      function placesSearchCB(data, status) {
        if (status === kakao.maps.services.Status.OK) {
          setArrayInfo({
            isLoading: false,
            isError: false,
            data: data.slice(0, 5),
          });
        }
      }

      setArrayInfo({ data, isLoading: true, isError: false });
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(`제주도 ${keyword}`, placesSearchCB);
    } catch (error) {
      setArrayInfo({ isLoading: true, data, isError: true });
    }
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
}
