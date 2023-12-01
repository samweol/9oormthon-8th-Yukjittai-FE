import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";

const ListStyle = styled.li`
  display: flex;
  justify-content: center;
`;
const LocationButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 6px;
  background-color: ${COLOR["bg-gray-500"]};
  border: none;
  border-radius: 10px;
  min-width: 345px;
  cursor: pointer;
  margin-bottom: 8px;
`;

const TitleStyle = styled.span`
  font-size: ${FONT_SIZE.m};
  font-weight: 500;
`;

const AddressStyle = styled.span`
  font-size: ${FONT_SIZE.s};
  color: ${COLOR["font-gray-700"]};
`;

const ContainerStyle = styled.div`
  display: flex;
  gap: 8px;
`;

export default function ReportButton(props) {
  const { data } = props;
  const { title, address, distance, time, onClickHandler } = data;
  return (
    <ListStyle>
      <LocationButtonStyle onClick={onClickHandler}>
        <TitleStyle>{title}</TitleStyle>
        <AddressStyle>{address}</AddressStyle>
        <ContainerStyle>
          <span>{distance}</span>
          <span>{time}</span>
        </ContainerStyle>
      </LocationButtonStyle>
    </ListStyle>
  );
}
