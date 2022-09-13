import React from "react";
import Nav from "../Nav";
import Navbar from "../Navbar";
import { Container } from "./style";
import { Outlet } from "react-router-dom";

export const Navbar1 = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Nav />
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar1;
