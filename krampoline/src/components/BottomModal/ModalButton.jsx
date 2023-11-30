import React from "react";
import { styled } from "styled-components";
import { FONT_SIZE } from "../../utils/fontSize";

const ModalButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 16px 0;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.bgColor};

  font-size: ${FONT_SIZE.m};
`;
export default function ModalButton(props) {
  const { children, bgColor, onClickHandler } = props;
  return (
    <ModalButtonStyle bgColor={bgColor} onClick={onClickHandler}>
      {children}
    </ModalButtonStyle>
  );
}
