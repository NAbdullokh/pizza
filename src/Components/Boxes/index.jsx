import React from "react";
import Card1 from "../../Assets/img/Boxes/1.png";
import Card2 from "../../Assets/img/Boxes/2.png";
import { Img, Wrapper } from "./style";

export const Boxes = () => {
  return (
    <Wrapper>
      <Img src={Card1} alt="" />
      <Img src={Card2} alt="" />
      <Img src={Card1} alt="" />
      <Img src={Card2} alt="" />
    </Wrapper>
  );
};
export default Boxes;
