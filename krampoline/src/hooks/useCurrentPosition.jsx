import React, { useEffect, useState } from "react";

export default function useCurrentPosition() {
  const [currentPosition, setCurrentPosition] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const locationLoadSuccess = (pos) => {
      const currentPos = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };
      setCurrentPosition(currentPos);
      alert(
        `Latitude: ${currentPos.latitude}, Longitude: ${currentPos.longitude}`
      );
    };

    const locationLoadError = () => {
      alert("위치 정보를 가져오는데 실패했습니다.");
    };

    const getCurrentPosBtn = () => {
      navigator.geolocation.getCurrentPosition(
        locationLoadSuccess,
        locationLoadError
      );
    };
  }, []);

  return { currentPosition, getCurrentPosBtn };
}
