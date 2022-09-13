import React, { useEffect, useState } from "react";
import { useLocation, Outlet, useParams } from "react-router-dom";
import combos from "../Mock/combo";
import pizza from "../Mock/pizza";
import snacks from "../Mock/snacks";
import sushi from "../Mock/sushi";
import drinks from "../Mock/drinks";
import { Box1, Box2, Container, Wrapper } from "./style";

export const Generic = () => {
  const { id } = useParams();
  const { item } = useParams();
  useEffect(() => {});

  const chooseSelect = (i, pizza, sushi, snacks, drinks) => {
    if (i == "pizza") return pizza;
    else if (i == "sushi") return sushi;
    else if (i == "snacks") return snacks;
    else if (i == "drinks") return drinks;
    else if (i == "sushi") return sushi;
    else if (i == "sushi") return sushi;
  };

  const [state, setState] = useState(
    chooseSelect(item, pizza, sushi, snacks, drinks)
  );

  return (
    <Wrapper>
      {state.map(
        (value) =>
          value.id == id && (
            <Container>
              <Box1>
                <Box1.Img src={value.img} alt={value.categoryPath} />
                {value.new && <Box1.New>{value.new}</Box1.New>}
              </Box1>
              <Box2>2</Box2>
            </Container>
          )
      )}
    </Wrapper>
  );
};

export default Generic;
