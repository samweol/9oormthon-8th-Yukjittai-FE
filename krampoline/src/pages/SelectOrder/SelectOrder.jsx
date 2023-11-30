import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import LocationHeader from "../../components/Header/LocationHeader";
import LabelHeader from "../../components/Header/LabelHeader";
import CheckButton from "../../components/CheckButton/CheckButton";
import Button from "../../components/Button/Button";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

export default function SelectOrder() {
  const [orderList, setOrderList] = useState({
    distance: [],
    type: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const isButtonActive = Object.values(orderList).every((item) => item.length);

  const { kakao } = window


  const distanceList = [
    {
      id: 1,
      key: "가까운 순으로",
      value: "최대한 근처로",
    },
    {
      id: 2,
      key: "50km",
      value: "5km 이내로",
    },
    {
      id: 3,
      key: "10km",
      value: "10km 이내로",
    },
  ];

  const typeList = [
    {
      id: 1,
      type: "map",
      key: "실내 관광지",
      value: "실내 관광지",
    },
    {
      id: 2,
      type: "map",
      key: "테마 관광지",
      value: "테마 관광지",
    },
    {
      id: 3,
      type: "map",
      key: "자연 관광지",
      value: "자연 관광지",
    },
    {
      id: 4,
      type: "map",
      key: "야외 관광지",
      value: "야외 관광지",
    },
  ];

  const selectOptionHandler = (key, type) => {
    if (orderList[key].includes(type)) {
      setOrderList({
        ...orderList,
        [key]: orderList[key].filter((item) => item !== type),
      });
    } else {
      setOrderList({ ...orderList, [key]: [type] });
    }
  };

  const callKakaoMapAPI = async (body) => {
    try {
      const resp = await axios.post("http://localhost:8000/kakao/directions", body);
      console.log("resp : ", resp);

    } catch (err) {
      console.error(err);
    }
  };


  const [gptResponse, setGptResponse] = useState("");


  const askGPT = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.post("http://localhost:8000/message", {
        keyword: location.state.searchData.keyword[0],
        condition1: location.state.searchData.condition[0],
        condition2: location.state.searchData.condition[1],
      });
  
      console.log("askGPT", resp.data);
      setGptResponse(resp.data); 
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  


  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    console.log('gptResponse: ', gptResponse);
    if (gptResponse && gptResponse.length) {
      gptResponse.forEach((keyword) => {
        console.log("keyword", keyword);
        ps.keywordSearch(`제주${keyword}`, placesSearchCB);
      });
    }
  
    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces((prevPlaces) => [...prevPlaces, ...data.slice(0, 10)]);
      }
    }
  }, [gptResponse]); 

  useEffect(() => {
    if (places && places.length > 0) {

        const x = location.state.searchData.gps ? location.state.searchData.gps.longitude : location.state.searchData.location.x;
        const y = location.state.searchData.gps ? location.state.searchData.gps.latitude : location.state.searchData.location.y;

        axios.post('http://localhost:8000/search-places',{ places, standard: {
        x,
        y,
      }, type: orderList.type.length > 0 && orderList.type[0], radius: orderList.distance.length > 0 && orderList.distance[0] })
      .then((res) => {
        console.log("res data : ", res.data)

         // "origin": {
      //   "x": "127.13144306487084",
      //   "y": " 37.44134209110179"
      // },
      // "destinations": [
      //   {
      //     "x": "127.14112393388389",
      //     "y": "37.44558371517034",
      //     "key": "0"
      //   },
      //   {
      //     "x": "127.14192737519186",
      //     "y": "37.4401766683372",
      //     "key": "1"
      //   }
      // ],
      // "radius": 5000

        if (res.data) {

          callKakaoMapAPI(
            {
              origin: {
                x,
                y
              },
              destinations: 
                res.data.reduce((acc, cur, index) => {
                  acc.push({ x: cur.x, y: cur.y, key: index });
                  return acc;
                }, [])
              ,
              radius: 5000
            }
          )
        }
      })
      .catch((err) => {
        console.error('err: ', err);
      });

    }
  }, [places])


useEffect(() => {
  console.log('orderList: ', orderList);
}, [orderList])
   



  const distanceButtonList = distanceList.map((item) => (
    <CheckButton
      key={item.id}
      active={orderList.distance.includes(item.key)}
      onClickHandler={() => {
        selectOptionHandler("distance", item.key);
      }}
    >
      {item.value}
    </CheckButton>
  ));

  const typeButtonList = typeList.map((item) => (
    <CheckButton
      key={item.id}
      active={orderList.type.includes(item.key)}
      onClickHandler={() => {
        selectOptionHandler("type", item.key);
      }}
    >
      {item.value}
    </CheckButton>
  ));
  return (
    <Layout>
      <LocationHeader
        location={location.state.searchData.location["address_name"]}
      >
        {location.state.searchData.location["place_name"]}
      </LocationHeader>
      <LabelHeader
        labelText="거리"
        standard={
          location.state.searchData.standard === "gps"
            ? "내 위치 기준"
            : "선택 장소 기준"
        }
      />
      {distanceButtonList}
      <LabelHeader labelText="장소 및 종류" />
      <div style={{ paddingBottom: "150px" }}>{typeButtonList}</div>
      <Button disabled={!isButtonActive} float={true} onClickHandler={askGPT}>
        완료
      </Button>
      {isLoading && <Loading />}
    </Layout>
  );
}




