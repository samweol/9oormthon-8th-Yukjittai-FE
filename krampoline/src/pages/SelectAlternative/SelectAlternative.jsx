import React from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import { useLocation } from "react-router-dom";

export default function SelectAlternative() {
  const location = useLocation();
  console.log(location.state);
  return (
    <Layout>
      <Button float={true}>다음</Button>
    </Layout>
  );
}
