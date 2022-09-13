import React from "react";
import combos from "../../../Mock/combo";
import ShowCrads from "../../ShowCards";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

export const Combo = () => {
  return (
    <>
      <Container>
        <ShowCrads data={combos} name={"Комбо"} />
      </Container>
      <Outlet />
    </>
  );
};

export default Combo;
