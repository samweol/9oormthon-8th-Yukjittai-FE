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

export default function LocationButton(props) {
  const { address, onClickHandler } = props;
  return (
    <ListStyle>
      <LocationButtonStyle onClick={onClickHandler}>
        <TitleStyle>{address["place_name"]}</TitleStyle>
        <AddressStyle>{address["address_name"]}</AddressStyle>
      </LocationButtonStyle>
    </ListStyle>
  );
}
