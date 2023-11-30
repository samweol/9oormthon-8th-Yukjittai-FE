import React, { useRef } from "react";
import { keyframes, styled } from "styled-components";
import { COLOR } from "../../utils/color";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    } to {
        opacity: 1;
        transform: none;
    }
`;

const ModalBackgroundStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.6);
`;

const BottomModalStyle = styled.article`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 393px;
  height: 268px;
  border-radius: 30px 30px 0 0;
  background-color: ${COLOR["bg-primary"]};
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0 24px;
  box-sizing: border-box;

  animation: ${fadeIn} 0.5s ease-in-out;
`;
export default function BottomModal(props) {
  const { children, onModalHandler } = props;
  const modalRef = useRef();
  return (
    <ModalBackgroundStyle
      onClick={(e) => {
        if (modalRef.current !== e.target) {
          onModalHandler();
        }
      }}
    >
      <BottomModalStyle>{children}</BottomModalStyle>
    </ModalBackgroundStyle>
  );
}
