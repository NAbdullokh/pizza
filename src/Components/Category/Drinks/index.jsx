import React from "react";
import drinks from "../../../Mock/drinks";
import ShowCrads from "../../ShowCards";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

export const Drinks = () => {
  return (
    <>
      <Container>
        <ShowCrads data={drinks} name={"Напитки"} />
      </Container>
      <Outlet />
    </>
  );
};

export default Drinks;
