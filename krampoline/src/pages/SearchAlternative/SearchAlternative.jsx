import React, { useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import LocationHeader from "../../components/Header/LocationHeader";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import useMapArray from "../../hooks/useMapArray";
import LocationButton from "../../components/LocationButton/LocationButton";
import { styled } from "styled-components";

const ListContainer = styled.ul`
  margin-top: 24px;
`;

export default function SearchAlternative() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const { data, isLoading, isError } = useMapArray();
  const locationList = data?.map((item) => (
    <LocationButton
      address={item}
      onClickHandler={() => {
        navigate("/select/condition");
      }}
    />
  ));

  return (
    <Layout>
      <LocationHeader my="57px">
        대안책이 필요한
        <br /> 장소를 검색해주세요!
      </LocationHeader>
      <Input
        ref={inputRef}
        placeholder="주소를 입력해주세요."
        onClickHandler={() => {
          if (inputRef.current.value.length) {
            navigate(`/search-alternative/${inputRef.current.value}`);
          }
        }}
      />
      <ListContainer>{locationList}</ListContainer>
    </Layout>
  );
}
