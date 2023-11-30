const { kakao } = window;

export const searchMap = () => {
  const ps = new kakao.maps.services.Places();
  const a = ps.keywordSearch("치킨", placesSearchCB);
  console.log({ a });

  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      console.log(data.slice(0, 5));
      return data.slice(0, 5);
      //   return data.slice(0, 5);  ```  ````  ``  `  `    `   ``````` ```````````````````
    }
  }
};
