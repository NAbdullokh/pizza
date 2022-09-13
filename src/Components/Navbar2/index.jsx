import React, { useContext, useState } from "react";
import {
  Container,
  Div,
  Img1,
  Item,
  ItemWrapper,
  Korzika,
  Shop,
  V,
} from "./style";
import { Select } from "../../Mock/select";
import { Outlet, NavLink } from "react-router-dom";
import SideBar from "../Sidebar";
import { Pizza } from "../../Context";

export const Navbar2 = () => {
  const active = ({ isActive }) => {
    return {
      color: isActive ? " #FF7010" : "black",
      textDecoration: "none",
    };
  };

  return (
    <>
      <Container>
        <Div>
          <Img1 />
        </Div>
        <ItemWrapper>
          {Select.map((value) => {
            return (
              <NavLink key={value.id} style={active} to={value.path}>
                <Item.Nav>{value.title}</Item.Nav>
              </NavLink>
            );
          })}
        </ItemWrapper>
        <Korzika>
          <Shop />
          <V>0</V>
          <V>₽</V>
        </Korzika>
      </Container>
      {/* <SideBar /> */}
      <Outlet />
    </>
  );
};
export default Navbar2;
