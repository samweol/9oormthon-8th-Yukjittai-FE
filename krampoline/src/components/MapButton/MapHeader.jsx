import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";
import { ReactComponent as Fruit } from "../../assets/icons/Fruit.svg";

const HeaderContainerMap = styled.div`
  margin-top: 30px;
`;

const TitleStyleMap = styled.h1`
  color: ${COLOR["font-black"]};
  font-size: ${FONT_SIZE.xl};
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const LocationStyleMap = styled.p`
  color: ${COLOR["font-gray-300"]};
  font-size: ${FONT_SIZE.s};
`;

const MapHeader = () => {
  return (
    <HeaderContainerMap>
      <TitleStyleMap>
        분석 완료! <Fruit />
      </TitleStyleMap>
      <TitleStyleMap>대신 갈 장소를 추천해드려요!</TitleStyleMap>
    </HeaderContainerMap>
  );
};

export default MapHeader;
