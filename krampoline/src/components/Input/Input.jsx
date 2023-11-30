import React, { forwardRef } from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";

const InputContainerStyle = styled.div`
  display: flex;
  align-items: center;
  min-width: 345px;
  border-bottom: 2px solid ${COLOR["border-gray"]};
`;
const InputStyle = styled.input`
  padding: 16px 8px;
  border: none;
  flex-grow: 1;
  font-size: ${FONT_SIZE.m};

  &::placeholder {
    color: ${COLOR["font-gray-100"]};
  }

  &:focus {
    outline: none;
  }
`;

const SearchButtonStyle = styled.button`
  background: transparent;
  border: none;
  padding: 0 16px 0 0;
  cursor: pointer;
`;

const Input = forwardRef(function Input(props, ref) {
  const { placeholder, onClickHandler, onChangeHandler } = props;
  return (
    <InputContainerStyle>
      <InputStyle
        ref={ref}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      <SearchButtonStyle onClick={onClickHandler}>
        <Search />
      </SearchButtonStyle>
    </InputContainerStyle>
  );
});

export default Input;
