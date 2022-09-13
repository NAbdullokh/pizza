import React, { memo } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, FooterEnd, Wrap } from "./style";
import logo from "../../Assets/icon/logo.svg";
import phone from "../../Assets/icon/phone.svg";
import location from "../../Assets/icon/location.svg";
import facebook from "../../Assets/icon/facebook.svg";
import instagram from "../../Assets/icon/instagram.svg";

export const Footer = () => {
  return (
    <>
      <Outlet />
      <Container>
        <Wrap>
          <Wrap.Item>
            <Link to={"/"}>
              <Wrap.Logo src={logo} />
            </Link>
          </Wrap.Item>
          <Wrap.Item>
            <Wrap.Title>Куда пицца</Wrap.Title>
            <Wrap.Text>О компании</Wrap.Text>
            <Wrap.Text>Пользовательское соглашение</Wrap.Text>
            <Wrap.Text>Условия гарантии</Wrap.Text>
          </Wrap.Item>
          <Wrap.Item>
            <Wrap.Title>Помощь</Wrap.Title>
            <Wrap.Text>Ресторан</Wrap.Text>
            <Wrap.Text>Контакты</Wrap.Text>
            <Wrap.Text>Поддержка</Wrap.Text>
            <Wrap.Text>Отследить заказ</Wrap.Text>
          </Wrap.Item>
          <Wrap.Item>
            <Wrap.Title>Контакты</Wrap.Title>
            <Wrap.Link>
              <Wrap.Emblem src={phone} />
              <Wrap.Text>+7 (926) 223-10-11</Wrap.Text>
            </Wrap.Link>
            <Wrap.Link>
              <Wrap.Emblem src={location} />
              <Wrap.Text>Москва, ул. Юных Ленинцев, д.99 </Wrap.Text>
            </Wrap.Link>
            <Wrap.Link>
              <Wrap.Emblem src={facebook} />
              <Wrap.Text>Facebok </Wrap.Text>
            </Wrap.Link>
            <Wrap.Link>
              <Wrap.Emblem src={instagram} />
              <Wrap.Text>Instagram </Wrap.Text>
            </Wrap.Link>
          </Wrap.Item>
        </Wrap>
        <FooterEnd>
          <FooterEnd.Title>© Copyright 2021 — Куда Пицца</FooterEnd.Title>
        </FooterEnd>
      </Container>
    </>
  );
};

export default memo(Footer);
