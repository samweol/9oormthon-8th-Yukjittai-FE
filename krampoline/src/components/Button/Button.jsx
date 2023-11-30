import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";

const ButtonStyle = styled.button`
  margin: 0 auto;
  background-color: ${(props) =>
    props.disabled ? COLOR["btn-oragne-light"] : COLOR["btn-primary"]};
  border: none;
  padding: 20px 26px;
  width: 345px;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};

  color: ${COLOR["font-white"]};
  font-size: ${FONT_SIZE.m};
`;

const FloatButtonStyle = styled.button`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  background-color: ${(props) =>
    props.disabled ? COLOR["btn-oragne-light"] : COLOR["btn-primary"]};
  border: none;
  padding: 20px 26px;
  width: 345px;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};

  color: ${COLOR["font-white"]};
  font-size: ${FONT_SIZE.m};
`;

export default function Button(props) {
  const { children, disabled, float, onClickHandler } = props;
  if (float) {
    return (
      <FloatButtonStyle onClick={onClickHandler} disabled={disabled}>
        {children}
      </FloatButtonStyle>
    );
  } else {
    return (
      <ButtonStyle onClick={onClickHandler} disabled={disabled}>
        {children}
      </ButtonStyle>
    );
  }
}
