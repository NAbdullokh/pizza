import React from "react";
import {
  Span,
  Ul,
  Wrap,
  Img,
  Phone,
  Lacation,
  Facebook,
  Instagram,
  P,
  HR,
  DIV,
} from "./style";
export const RightNav = ({ open }) => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <Ul open={open}>
      <Wrap>
        <Img />
        <P>Войти в аккаунт</P>
      </Wrap>
      <li>Акции</li>
      <li>О компании</li>
      <li>Условия гарантии</li>
      <li>Ресторан</li>
      <li>Контакты</li>
      <li>Поддержка</li>
      <li>Отследить заказ</li>
      <HR />
      <DIV>
        <Phone />
        <Span>+7 (926) 223-10-11</Span>
      </DIV>
      <DIV>
        <Lacation />
        <Span>Москва, ул. Юных Ленинцев, д.99 </Span>
      </DIV>
      <DIV>
        <DIV>
          <Facebook />
          <Span>Facebok</Span>
        </DIV>
        <DIV>
          <Instagram />
          <Span>Instagram</Span>
        </DIV>
      </DIV>
      <HR />
      <Span.P>Время работы: с 11:00 до 23:00</Span.P>
    </Ul>
  );
};
export default RightNav;
