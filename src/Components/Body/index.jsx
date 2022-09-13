import React from "react";
import desert from "../../Mock/desert";
import pizza from "../../Mock/pizza";
import snacks from "../../Mock/snacks";
import sushi from "../../Mock/sushi";
import drinks from "../../Mock/drinks";
import ShowCrads from "../ShowCards";

import { Container } from "./style";
import sauces from "../../Mock/sauces";
import combos from "../../Mock/combo";

export const Body = () => {
  return (
    <Container>
      <ShowCrads data={pizza} name={"Пицца"} />
      <ShowCrads data={sushi} name={"Суши"} />
      <ShowCrads data={snacks} name={"Закуски"} />
      <ShowCrads data={desert} name={"Десерты"} />
      <ShowCrads data={drinks} name={"Напитки"} />
      <ShowCrads data={sauces} name={"Соусы"} />
      <ShowCrads data={combos} name={"Комбо"} />
    </Container>
  );
};

export default Body;
