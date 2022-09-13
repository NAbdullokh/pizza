import React from "react";
import snacks from "../../../Mock/snacks";
import ShowCrads from "../../ShowCards";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

export const Snacks = () => {
  return (
    <>
      <Container>
        <ShowCrads data={snacks} name={"Закуски"} />
      </Container>
      <Outlet />
    </>
  );
};

export default Snacks;
