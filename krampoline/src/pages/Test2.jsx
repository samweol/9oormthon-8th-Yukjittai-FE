import React, { useState } from 'react';
import Button from '../components/Button/Button';
import CheckButton from '../components/CheckButton/CheckButton';
import LabelHeader from '../components/Header/LabelHeader';
import LocationHeader from '../components/Header/LocationHeader';
import Layout from '../components/Layout/Layout';
import LandingPage from '../components/MapButton/LandingPage';
import MapContainer from '../components/MapButton/MapContainer';
import MapHeader from '../components/MapButton/MapHeader';

const Test2 = () => {
    const optionList = [
        {
          id: 1,
          key: "",
          value: "방문하기 어려워요.",
        },
        {
          id: 2,
          key: "거리-긴여행",
          value: "긴 여행으로 지쳤어요..",
        },
      ];
    
      const [keywordList, setKeywordList] = useState([]);
    
      const selectOptionHandler = (type) => {
        if (keywordList.includes(type)) {
          setKeywordList(keywordList.filter((item) => item !== type));
        } else {
          setKeywordList([...keywordList, type]);
        }
      };


      const optionButtonList = optionList.map((item) => (
        <CheckButton
          onClickHandler={() => {
            selectOptionHandler(item.key);
          }}
        >
          {item.value}
        </CheckButton>
      ));

    return (
        <Layout>
        <MapHeader />
        <MapContainer />
        <Button>다시 찾기</Button>
      </Layout>
    );
}

export default Test2;
