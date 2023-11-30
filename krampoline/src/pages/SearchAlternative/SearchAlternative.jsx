import React from "react";
import Layout from "../../components/Layout/Layout";
import LocationHeader from "../../components/Header/LocationHeader";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import useMapArray from "../../hooks/useMapArray";

export default function SearchAlternative() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useMapArray();
  console.log({ data, isLoading, isError });
  return (
    <Layout>
      <LocationHeader my="57px">
        대안책이 필요한
        <br /> 장소를 검색해주세요!
      </LocationHeader>
      <Input placeholder="주소를 입력해주세요." />
      <Button
        float={true}
        onClickHandler={() => {
          navigate("/select/condition");
        }}
      >
        다음
      </Button>
    </Layout>
  );
}
