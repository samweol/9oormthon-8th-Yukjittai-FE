import React, { useEffect, useState } from 'react'

const { kakao } = window

const MapContainer = ({ searchPlace }) => {
  const [Places, setPlaces] = useState([]);

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(`제주도 ${"중국집"}`, placesSearchCB);

    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < 7 && i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        setPlaces(data.slice(0, 7));
      }
    }

    console.log(Places);

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);


  return (
    <div>
      <div id="myMap" style={{ width: '100%', height: '200px', marginBottom: '20px', marginTop:'20px'}}></div>
      <div id="result-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {Places.map((item, i) => (
          <div key={i} style={{ marginTop: '20px' }}>
            <div>
              <h5>{item.place_name}</h5>
              {item.road_address_name ? (
                <div>
                  <span>{item.road_address_name}</span>
                  <span>{item.address_name}</span>
                </div>
              ) : (
                <span>{item.address_name}</span>
              )}
              <span>{item.phone}</span> <br />
              <span>{item.category_group_name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapContainer;
