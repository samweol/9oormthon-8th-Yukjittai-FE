import React from "react";
import { ReactComponent as BackArrow } from "../../assets/icons/BackArrow.svg";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderStyle = styled.header`
  padding-top: 24px;
`;

const BackButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
export default function LayoutHeader() {
  const navigate = useNavigate();
  const onBackClickHandler = () => {
    navigate(-1);
  };
  return (
    <HeaderStyle>
      <BackButtonStyle onClick={onBackClickHandler}>
        <BackArrow />
      </BackButtonStyle>
    </HeaderStyle>
  );
}
