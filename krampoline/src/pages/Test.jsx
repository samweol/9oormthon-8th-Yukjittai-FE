import React from "react";
import Button from "../components/Button/Button";
import CheckButton from "../components/CheckButton/CheckButton";
import { useState } from "react";

export default function Test() {
  const optionList = [
    {
      id: 1,
      key: "",
      value: "방문하기 어려워요.",
    },
    {
      id: 2,
      key: "거리",
      value: "긴 여행으로 지쳤어요..",
    },
    {
      id: 3,
      key: "거리",
      value: "음식점까지의 이동거리가 멀어요.",
    },
    {
      id: 4,
      key: "메뉴",
      value: "다른 메뉴가 먹고 싶어요.",
    },
    {
      id: 5,
      key: "",
      value: "그 외에 다른 이유예요.",
    },
  ];

  const optionButtonList = optionList.map((item) => (
    <CheckButton>{item.value}</CheckButton>
  ));
  const [keywordList, setKeywordList] = useState([]);
  const selectOptionHandler = () => {};
  return (
    <>
      <Button>다음</Button>
      {optionButtonList}
    </>
  );
}
