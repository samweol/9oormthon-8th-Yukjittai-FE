import React, { useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import LocationHeader from "../../components/Header/LocationHeader";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import useMapArray from "../../hooks/useMapArray";
import LocationButton from "../../components/LocationButton/LocationButton";
import { styled } from "styled-components";
import BottomModal from "../../components/BottomModal/BottomModal";
import ModalHeader from "../../components/BottomModal/ModalHeader";
import ModalBody from "../../components/BottomModal/ModalBody";
import ModalButton from "../../components/BottomModal/ModalButton";
import { ReactComponent as LocationMark } from "../../assets/icons/LocationMark.svg";
import { COLOR } from "../../utils/color";

const ListContainer = styled.ul`
  margin-top: 24px;
`;

export default function SearchAlternative() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchData, setSearchData] = useState({
    location: {},
    standard: "",
  });
  const { data, isLoading, isError } = useMapArray();

  const locationList = data?.map((item) => (
    <LocationButton
      key={item.id}
      address={item}
      onClickHandler={() => {
        setIsModalOpen(!isModalOpen);
        setSearchData({ ...searchData, location: item });
      }}
    />
  ));

  return (
    <Layout>
      <LocationHeader my="57px">
        대안이 필요한
        <br /> 기존 여행지 정보를 입력해주세요!
      </LocationHeader>
      <Input
        ref={inputRef}
        placeholder="장소명을 입력해주세요."
        onClickHandler={() => {
          if (inputRef.current.value.length) {
            navigate(`/search-alternative/${inputRef.current.value}`);
          }
        }}
      />
      <ListContainer>{locationList}</ListContainer>
      {isModalOpen && (
        <BottomModal
          onModalHandler={() => {
            setIsModalOpen(false);
          }}
        >
          <ModalHeader />
          <ModalBody>
            <ModalButton
              bgColor={COLOR["btn-oragne-light"]}
              onClickHandler={() => {
                navigate("/select/condition", {
                  state: { ...searchData, standard: "gps" },
                });
              }}
            >
              <LocationMark />
              <span>내 위치 주변 추천</span>
            </ModalButton>
            <ModalButton
              bgColor={COLOR["btn-disabled"]}
              onClickHandler={() => {
                navigate("/select/condition", {
                  state: { ...searchData, standard: "selectLocation" },
                });
              }}
            >
              <LocationMark />
              <span>선택 장소 주변 추천</span>
            </ModalButton>
          </ModalBody>
        </BottomModal>
      )}
    </Layout>
  );
}
