import React from "react";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import CheckButton from "../../components/CheckButton/CheckButton";
import LocationHeader from "../../components/Header/LocationHeader";
import LabelHeader from "../../components/Header/LabelHeader";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function SelectCondition() {
  const [keywordList, setKeywordList] = useState([]);

  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();

  const optionList = [
    {
      id: 1,
      type: "map",
      key: "거리-긴여행",
      value: "긴 여행으로 지쳤어요.",
    },
    {
      id: 2,
      type: "map",
      key: "이동거리",
      value: "관광지까지의 이동 거리가 멀어요.",
    },
    {
      id: 3,
      type: "gpt",
      key: "실내관광",
      value: "비가 와서 방문할 수 없어요",
    },
    {
      id: 4,
      type: "gpt",
      key: "",
      value: "그 외에 다른 이유예요.",
    },
  ];

  const selectOptionHandler = (type) => {
    if (keywordList.includes(type)) {
      setKeywordList(keywordList.filter((item) => item !== type));
    } else {
      setKeywordList([...keywordList, type]);
    }
  };
  const optionButtonList = optionList.map((item) => (
    <CheckButton
      active={keywordList.includes(item.key)}
      onClickHandler={() => {
        selectOptionHandler(item.key);
      }}
    >
      {item.value}
    </CheckButton>
  ));

  return (
    <Layout>
      <LocationHeader location={location.state.location["address_name"]}>
        {location.state.location["place_name"]}
      </LocationHeader>
      <LabelHeader>방문하지 못하는 이유가 무엇인가요?</LabelHeader>
      {optionButtonList}
      <Button
        float={true}
        disabled={!keywordList.length}
        onClickHandler={() => {
          navigate("/select/alternative", {
            state: {
              searchData: {
                ...location.state,
                keyword: keywordList,
              },
            },
          });
        }}
      >
        다음
      </Button>
    </Layout>
  );
}
