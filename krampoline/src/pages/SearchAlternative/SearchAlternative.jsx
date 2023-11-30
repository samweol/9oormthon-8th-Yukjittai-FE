import React from "react";
import Layout from "../../components/Layout/Layout";
import LocationHeader from "../../components/Header/LocationHeader";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function SearchAlternative() {
  return (
    <Layout>
      <LocationHeader my="57px">
        대안책이 필요한
        <br /> 장소를 검색해주세요!
      </LocationHeader>
      <Input placeholder="주소를 입력해주세요." />
      <Button float={true}>다음</Button>
    </Layout>
  );
}
