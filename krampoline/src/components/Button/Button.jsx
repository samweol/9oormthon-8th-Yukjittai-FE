import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";

const ButtonStyle = styled.button`
  background-color: ${(props) =>
    props.disabled ? COLOR["btn-disabled"] : COLOR["btn-primary"]};
  border: none;
  padding: 20px 26px;
  min-width: 345px;
  border-radius: 10px;

  color: ${(props) =>
    props.disabled ? COLOR["font-black"] : COLOR["font-white"]};
  font-size: ${FONT_SIZE.m};
`;

export default function Button(props) {
  const { children, disabled, onClickHandler } = props;
  return (
    <ButtonStyle onClick={onClickHandler} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
}
