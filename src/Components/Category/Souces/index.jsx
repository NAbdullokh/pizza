import React from "react";
import sauces from "../../../Mock/sauces";
import ShowCrads from "../../ShowCards";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

export const Sauces = () => {
  return (
    <>
      <Container>
        <ShowCrads data={sauces} name={"Соусы"} />
      </Container>
      <Outlet />
    </>
  );
};

export default Sauces;
