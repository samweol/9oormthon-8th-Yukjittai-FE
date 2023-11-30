import React from "react";
import { keyframes, styled } from "styled-components";
import { ReactComponent as LoadingIcon } from "../../assets/icons/LoadingIcon.svg";
import { FONT_SIZE } from "../../utils/fontSize";

const LoadingBarBackgroundStyle = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.7);
`;

const rotate = keyframes`
    from {
        transform: rotate(0);
    } to {
        transform: rotate(1080deg);
    }
`;

const IconContainer = styled.div`
  animation: ${rotate} 3s ease-in-out;
`;

const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: ${FONT_SIZE.ml};
`;

export default function Loading() {
  return (
    <LoadingBarBackgroundStyle>
      <LoadingContainer>
        <IconContainer>
          <LoadingIcon />
        </IconContainer>
        <p>분석 중입니다..</p>
      </LoadingContainer>
    </LoadingBarBackgroundStyle>
  );
}
