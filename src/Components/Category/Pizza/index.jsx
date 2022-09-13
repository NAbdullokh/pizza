import React from "react";
import pizza from "../../../Mock/pizza";
import ShowCrads from "../../ShowCards";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

export const Pizza = () => {
  return (
    <>
      <Container>
        <ShowCrads data={pizza} name={"Пицца"} />
      </Container>
      <Outlet />
    </>
  );
};

export default Pizza;
