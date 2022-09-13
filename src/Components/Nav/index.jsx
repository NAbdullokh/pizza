import React from "react";
import Burger from "./Burger";
import { Container, Img1, Item, Korzika, V, Shop, Navbar } from "./style";
import { Div } from "./style";

export const Nav = () => {
  return (
    <Container>
      <Div>
        <Img1 />
        <Item>Куда пицца</Item>
      </Div>
      <Korzika>
        <Shop />
        <V>0</V>
        <V>₽</V>
      </Korzika>
      <Navbar>
        <Burger />
      </Navbar>
    </Container>
  );
};
export default Nav;
