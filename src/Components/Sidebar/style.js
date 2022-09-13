import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  @media (max-width: 910px) {
    padding-right: 20px;
    overflow-x: scroll;
    display: flex;
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }
  }
  @media screen and (min-width: 900px) {
    /* display: none; */
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: #ffffff;
  width: 135px;
  height: 104px;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  @media (max-width: 1370px) {
    width: 110px;
    height: 79px;
  }
  @media (max-width: 1130px) {
    width: 90px;
    height: 59px;
  }

  @media (max-width: 910px) {
    flex-direction: row;
    width: 99px;
    height: 40px;
    margin-right: 12px;
  }
`;

Box.Icon = styled.img`
  @media (max-width: 1110px) {
    width: 25px;
  }
  @media (max-width: 910px) {
    width: 20px;
    margin-top: -5px;
  }
`;

Box.Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #191919;
  text-decoration: none;
`;

export const active = {
  color: "#E23535",
};
