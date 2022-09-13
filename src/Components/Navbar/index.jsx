import React, { useState } from "react";
import { Container, Img, Item, Wrapper, IMG, It } from "./style";
export const Navbar = () => {
  const [current, setCurrent] = useState(new Date());
  const setUpdate = () => {
    setCurrent(new Date());
  };
  setTimeout(setUpdate, 1000);
  const date = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
  return (
    <Container>
      <Container.Main>
        <Wrapper>
          <Item>
            <Img />
            <Container.Span>Москва</Container.Span>
          </Item>
        </Wrapper>

        <It>
          <Container.H>Проверить адрес</Container.H>
        </It>
        <Item>
          <Container.Span> Среднее время доставки:{date}</Container.Span>
        </Item>
        <It>
          <Container.H>Время работы: c 11:00 до 23:00</Container.H>
        </It>

        <It>
          <IMG />
          <Container.P>Войти в аккаунт</Container.P>
        </It>
      </Container.Main>
    </Container>
  );
};
export default Navbar;
