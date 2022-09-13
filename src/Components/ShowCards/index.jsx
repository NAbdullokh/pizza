import React from "react";
import Card from "../Card";
import { Container, Title } from "./style";

export const ShowCrads = ({ data, name }) => {
  return (
    <>
      <Title> {name}</Title>
      <Container>
        {data.map((item) => {
          return <Card key={item.id} value={item} />;
        })}
      </Container>
    </>
  );
};

export default ShowCrads;
