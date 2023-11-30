import React from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import LocationHeader from "../../components/Header/LocationHeader";
import LabelHeader from "../../components/Header/LabelHeader";
import CheckButton from "../../components/CheckButton/CheckButton";
import { useState } from "react";
import axios from "axios";

export default function SelectAlternative() {
  const [keywordList, setKeywordList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const optionList = [
    {
      id: 1,
      type: "map",
      key: "멋진 뷰를 볼 수 있는",
      value: "멋진 뷰를 볼 수 있는 곳",
    },
    {
      id: 2,
      type: "map",
      key: "2-평점-장소",
      value: "지도/리뷰 앱 평가가 좋은 곳",
    },
    {
      id: 3,
      type: "gpt",
      key: "3-실내관광",
      value: "제주의 특색이 느껴지는 곳",
    },
    {
      id: 4,
      type: "gpt",
      key: "특별한 추억을 얻을 수 있는",
      value: "특별한 추억을 얻을 수 있는 곳",
    },
    {
      id: 5,
      type: "gpt",
      key: "5",
      value: "현지인만 아는 곳",
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
      key={item.id}
      active={keywordList.includes(item.key)}
      onClickHandler={() => {
        selectOptionHandler(item.key);
      }}
    >
      {item.value}
    </CheckButton>
  ));

  const askGPT = async () => {
    console.log("in");
    try {
      const resp = await axios.post("http://localhost:8000/message", {
        message: [...location.state.searchData.keyword, ...keywordList],
      });

      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <LocationHeader
        location={location.state.searchData.location["address_name"]}
      >
        {location.state.searchData.location["place_name"]}
      </LocationHeader>
      <LabelHeader labelText="어떤 대안으로 추천해 드릴까요?" />
      {optionButtonList}
      <Button
        float={true}
        onClickHandler={() => {
          // askGPT();
          navigate("/select/order", {
            state: {
              searchData: {
                ...location.state.searchData,
                condition: keywordList,
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
