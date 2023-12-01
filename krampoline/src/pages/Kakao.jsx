import React, { useEffect } from "react";

export default function Kakao(props) {
  const { kakaoMapData, diarectMap } = props;

  useEffect(() => {
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(
        diarectMap.destinations[0].y,
        diarectMap.destinations[0].x
      ), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    const test = diarectMap.destinations.map((item) => {
      return {
        content: "<div></div>",
        latlng: new window.kakao.maps.LatLng(item.y, item.x),
      };
    });

    console.log(test);

    test.forEach((position) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: position.latlng,
      });

      const infowindow = new window.kakao.maps.InfoWindow({
        content: position.content,
      });

      window.kakao.maps.event.addListener(marker, "mouseover", () =>
        infowindow.open(map, marker)
      );
      window.kakao.maps.event.addListener(marker, "mouseout", () =>
        infowindow.close()
      );
    });
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        minHeight: "400px",
        marginTop: "12px",
        overflow: "auto",
      }}
    ></div>
  );
}
