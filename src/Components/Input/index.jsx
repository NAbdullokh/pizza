import React from "react";
import { Container, InputWrapper } from "./style";
import location from "../../Assets/icon/location.svg";
import plane from "../../Assets/icon/plane.svg";

export const Input = () => {
  return (
    <Container>
      <Container.Title>Проверить адрес доставки</Container.Title>
      <InputWrapper>
        <InputWrapper.Icon src={location} alt="location" />
        <InputWrapper.Input type="text" placeholder="Адрес" />
        <Container.Btn>Проверить</Container.Btn>
        <Container.Btn2>
          <img src={plane} alt="" />
        </Container.Btn2>
      </InputWrapper>
    </Container>
  );
};

export default Input;
