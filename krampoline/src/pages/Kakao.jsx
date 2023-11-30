import React, { useEffect } from 'react';

export default function Kakao() {
    useEffect(() => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
        const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        const positions = [
            {
                content: '<div>카카오</div>', 
                latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
            },
            // ... (other positions)
        ];

        positions.forEach((position) => {
            const marker = new window.kakao.maps.Marker({
                map: map,
                position: position.latlng
            });

            const infowindow = new window.kakao.maps.InfoWindow({
                content: position.content
            });

            window.kakao.maps.event.addListener(marker, 'mouseover', () => infowindow.open(map, marker));
            window.kakao.maps.event.addListener(marker, 'mouseout', () => infowindow.close());
        });
    }, []);

    return (
        <div id='map' style={{ width: '100%', height: '400px' }}></div>
    );
}
