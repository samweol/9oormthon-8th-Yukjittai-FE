import React, { useState } from "react";
import Button from "../components/Button/Button";
import CheckButton from "../components/CheckButton/CheckButton";
import Layout from "../components/Layout/Layout";
import MapHeader from "../components/MapButton/MapHeader";
import Kakao from "./Kakao";
import { useLocation } from "react-router-dom";
import ReportButton from "../components/ReportButton/ReportButton";
import { styled } from "styled-components";

const Container = styled.div`
  margin: 12px 0;
  overflow: auto;
`;

const Test2 = () => {
  const location = useLocation();
  const { position, data } = location.state;

  const test = [
    {
      title: "제주 아쿠아플레닛",
      address: "제주 서귀포시 성산읍 섭지코지로 95",
      distance: "2.7km",
      time: "5min",
    },
    {
      title: "오름 언덕",
      address: "제주 서귀포시 성산읍 섭지코지로 689-32",
      distance: "2.7km",
      time: "5min",
    },
  ];

  const list = test.map((item) => <ReportButton data={item} />);

  return (
    <Layout>
      <MapHeader />
      <Kakao diarectMap={position} />
      <Container>{list}</Container>
      <Button>다시 찾기</Button>
    </Layout>
  );
};

export default Test2;
