import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";

const HeaderContainer = styled.section`
  margin-bottom: ${(props) => (props.my ? props.my : "8px")};
`;
const TitleStyle = styled.h1`
  color: ${COLOR["font-black"]};
  font-size: ${FONT_SIZE.xl};
  font-weight: 500;
  padding-top: 30px;
  margin-bottom: ${(props) => (props.location ? "8px" : 0)};
  line-height: 30.5px;
`;
const LocationStyle = styled.p`
  color: ${COLOR["font-gray-300"]};
  font-size: ${FONT_SIZE.s};
`;

export default function LocationHeader(props) {
  const { children, location, my } = props;
  return (
    <HeaderContainer my={my}>
      <TitleStyle>{children}</TitleStyle>
      <LocationStyle>{location}</LocationStyle>
    </HeaderContainer>
  );
}
