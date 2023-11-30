import React from "react";
import { styled } from "styled-components";
import LayoutHeader from "./LayoutHeader";
import Bg from "../../assets/images/mainBg.png";

const LayoutStyle = styled.section`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  width: 393px;
  height: 852px;
  background-image: ${(props) => props.bgImage && `url(${Bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
`;
export default function Layout(props) {
  const { children, hasHeader, bgImage } = props;
  return (
    <LayoutStyle bgImage={bgImage}>
      {!hasHeader && <LayoutHeader />}
      {children}
    </LayoutStyle>
  );
}
