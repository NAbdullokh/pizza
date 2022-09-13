import React from "react";
import Body from "../Body";
import Boxes from "../Boxes";
import Input from "../Input";
import SideBar from "../Sidebar";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <SideBar />
      <Boxes />
      <Input />
      <Body />
    </Container>
  );
};

export default Home;
