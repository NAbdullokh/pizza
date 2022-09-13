import React from "react";
import desert from "../../../Mock/desert";
import ShowCrads from "../../ShowCards";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

export const Desert = () => {
  return (
    <>
      <Container>
        <ShowCrads data={desert} name={"Десерты"} />
      </Container>
      <Outlet />
    </>
  );
};

export default Desert;
