import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import LocationHeader from "../../components/Header/LocationHeader";
import LabelHeader from "../../components/Header/LabelHeader";
import CheckButton from "../../components/CheckButton/CheckButton";
import Button from "../../components/Button/Button";
import axios from "axios";

export default function SelectOrder() {
  const [orderList, setOrderList] = useState({
    distance: [],
    rate: [],
    type: [],
  });
  const location = useLocation();

  const isButtonActive = Object.values(orderList).every((item) => item.length);

  console.log([
    ...location.state.searchData.keyword,
    ...location.state.searchData.condition,
  ]);

  const distanceList = [
    {
      id: 1,
      key: "가까운 순으로",
      value: "최대한 근처로",
    },
    {
      id: 2,
      key: "500m",
      value: "500m 이내로",
    },
    {
      id: 3,
      key: "1km",
      value: "1km 이내로",
    },
  ];

  const rateList = [
    {
      id: 1,
      type: "map",
      key: "3점이상-리뷰100개이상",
      value: "유명 관광지 위주로",
    },
    {
      id: 2,
      type: "map",
      key: "3점이하-리뷰100개이하",
      value: "로컬 관광지 위주로",
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

  const askGPT = async () => {
    console.log("api start");
    try {
      const resp = await axios.post("http://localhost:8000/message", {
        keyword: location.state.searchData.keyword[0],
        condition1: location.state.searchData.condition[0],
        condition2: location.state.searchData.condition[1],
      });

      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

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

  const rateButtonList = rateList.map((item) => (
    <CheckButton
      key={item.id}
      active={orderList.rate.includes(item.key)}
      onClickHandler={() => {
        selectOptionHandler("rate", item.key);
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
      <LabelHeader labelText="인지도" />
      {rateButtonList}
      <LabelHeader labelText="장소 및 종류" />
      {typeButtonList}
      <Button disabled={!isButtonActive} float={true} onClickHandler={askGPT}>
        완료
      </Button>
    </Layout>
  );
}
