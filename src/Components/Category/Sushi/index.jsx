import React from "react";
import sushi from "../../../Mock/sushi";
import ShowCrads from "../../ShowCards";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

export const Sushi = () => {
  return (
    <>
      <Container>
        <ShowCrads data={sushi} name={"Суши"} />
      </Container>
      <Outlet />
    </>
  );
};

export default Sushi;
