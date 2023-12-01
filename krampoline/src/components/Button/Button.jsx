import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";

const ButtonStyle = styled.button`
  margin: 0 auto;
  background-color: ${(props) =>
    props.bgColor
      ? props.bgColor
      : props.disabled
      ? COLOR["btn-oragne-light"]
      : COLOR["btn-primary"]};
  border: none;
  padding: 20px 26px;
  width: 345px;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};

  color: ${COLOR["font-white"]};
  font-size: ${FONT_SIZE.m};
`;

const FloatButtonStyle = styled.button`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  background-color: ${(props) =>
    props.bgColor
      ? props.bgColor
      : props.disabled
      ? COLOR["btn-oragne-light"]
      : COLOR["btn-primary"]};
  border: none;
  padding: 20px 26px;
  width: 345px;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};

  color: ${COLOR["font-white"]};
  font-size: ${FONT_SIZE.m};
`;

export default function Button(props) {
  const { children, disabled, float, bgColor, onClickHandler } = props;
  if (float) {
    return (
      <FloatButtonStyle
        bgColor={bgColor}
        onClick={onClickHandler}
        disabled={disabled}
      >
        {children}
      </FloatButtonStyle>
    );
  } else {
    return (
      <ButtonStyle
        bgColor={bgColor}
        onClick={onClickHandler}
        disabled={disabled}
      >
        {children}
      </ButtonStyle>
    );
  }
}
