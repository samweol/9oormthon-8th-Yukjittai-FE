import React from "react";
import { styled } from "styled-components";
import LayoutHeader from "./LayoutHeader";

const LayoutStyle = styled.section`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  max-width: 345px;
  min-height: 852px;
  border: 1px solid red;
`;
export default function Layout(props) {
  const { children, hasHeader } = props;
  return (
    <LayoutStyle>
      {!hasHeader && <LayoutHeader />}
      {children}
    </LayoutStyle>
  );
}
