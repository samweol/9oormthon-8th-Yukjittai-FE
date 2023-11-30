import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";

const ModalHeaderStyle = styled.section`
  color: ${COLOR["font-black-700"]};
  font-size: ${FONT_SIZE.l};
  margin-top: 32px;
`;

export default function ModalHeader() {
  return <ModalHeaderStyle>어디를 기준으로 추천해드릴까요?</ModalHeaderStyle>;
}
