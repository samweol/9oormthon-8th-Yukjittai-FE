import React from "react";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";

export default function SelectOrder() {
  const location = useLocation();
  console.log("here");
  console.log(location.state);
  return <Layout></Layout>;
}
