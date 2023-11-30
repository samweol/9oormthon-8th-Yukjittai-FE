import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";

const LabelStyle = styled.h2`
  display: flex;
  justify-content: space-between;
  color: ${COLOR["font-gray-900"]};
  font-size: ${FONT_SIZE.l};
  font-weight: 500;
  padding-top: 45px;
  margin-bottom: 18px;
`;

const OptionStyle = styled.span`
  font-size: ${FONT_SIZE.s};
  color: ${COLOR["font-gray-200"]};
`;

export default function LabelHeader(props) {
  const { labelText, standard } = props;
  return (
    <LabelStyle>
      <span>{labelText}</span>
      <OptionStyle>{standard}</OptionStyle>
    </LabelStyle>
  );
}
