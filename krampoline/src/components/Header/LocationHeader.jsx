import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";

const HeaderContainer = styled.section``;
const TitleStyle = styled.h1`
  color: ${COLOR["font-black"]};
  font-size: ${FONT_SIZE.l};
  font-weight: 500;
  margin-bottom: 8px;
`;
const LocationStyle = styled.p`
  color: ${COLOR["font-gray-300"]};
  font-size: ${FONT_SIZE.s};
`;

export default function LocationHeader() {
  return (
    <HeaderContainer>
      <TitleStyle>밍키네 짜장면</TitleStyle>
      <LocationStyle>제주 서귀포시 성산읍 동류암로 20</LocationStyle>
    </HeaderContainer>
  );
}
