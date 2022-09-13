import styled from "styled-components";
import logo from "../../Assets/icon/logo.svg";
import korzina from "../../Assets/icon/korzina.svg";
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #ffffff;
  padding: 0 5% 0 5%;
  height: 60px;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 300px) {
    padding: 0 5%;
  }
  @media (max-width: 350px) {
    padding: 0 5%;
  }
  @media (max-width: 450px) {
    padding: 0 5%;
  }
  @media (max-width: 500px) {
    padding: 0 5%;
  }
  @media (max-width: 930px) {
    display: none;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Img1 = styled.img.attrs({
  src: logo,
})`
  width: 150px;
  margin-right: 15px;

  @media (max-width: 350px) {
    width: 110px;
  }

  @media (max-width: 990px) {
    width: 120px;
  }
`;
export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #191919;
  :active {
    cursor: pointer;
  }
  :hover {
    transform: scale(1.1);
    font-weight: 500;
    color: black;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 12px;
    font-weight: 500;
  }
`;
Item.Nav = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  margin: 20px 20px;
  @media (max-width: 1070px) {
    margin: 10px 15px;
    font-size: 14px;
  }
`;
export const Korzika = styled.div`
  padding: 10px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: #ff7010;
  border-radius: 4px;
  height: 40px;

  @media (max-width: 990px) {
    transform: scale(0.8);
  }
`;

export const Shop = styled.img.attrs({
  src: korzina,
})`
  width: 21px;
  height: 21px;
`;

export const V = styled.div`
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 22px;
  color: #ffffff;
`;
