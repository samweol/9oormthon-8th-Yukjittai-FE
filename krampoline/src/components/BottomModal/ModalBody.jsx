import React from "react";
import { styled } from "styled-components";

const ModalBodyStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;
export default function ModalBody(props) {
  const { children } = props;
  return <ModalBodyStyle>{children}</ModalBodyStyle>;
}
