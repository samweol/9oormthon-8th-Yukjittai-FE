import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";

const LabelStyle = styled.h2`
  color: ${COLOR["font-gray-900"]};
  font-size: ${FONT_SIZE.l};
  font-weight: 500;
  padding-top: 45px;
  margin-bottom: 18px;
`;

export default function LabelHeader(props) {
  const { children } = props;
  return <LabelStyle>{children}</LabelStyle>;
}
