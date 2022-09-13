import React from "react";
import { useParams } from "react-router-dom";
import pizza from "../../Mock/pizza";
import { Container } from "../Card/style";

export const GenericSingle = () => {
  const { id } = useParams(id);

  console.log(id, "asdsa");
  return (
    <Container>
      {
        // pizza.map((value) )
      }
      Generic
    </Container>
  );
};

export default GenericSingle;
