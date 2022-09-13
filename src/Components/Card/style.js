import styled from "styled-components";
import { ReactComponent as cheese } from "../../Assets/icon/generic/cheese.svg";
import { ReactComponent as cucumber } from "../../Assets/icon/generic/cucmber.svg";
import { ReactComponent as pepperoni } from "../../Assets/icon/generic/pepperoni.svg";
import { ReactComponent as sauce } from "../../Assets/icon/generic/sauce.svg";

export const Container = styled.div`
  width: 300px;
  height: 480px;
  background: #ffffff;
  border: 1px solid #fff0f0;
  border-radius: 12px;
  margin: 30px 0 15px 0;
  @media (max-width: 660px) {
    height: 160px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    margin: 15px 0 8px 0;
  }
  @media (max-width: 390px) {
    height: 130px;
  }
`;

Container.Mobile = styled.div`
  padding-top: 10px;
  @media (max-width: 660px) {
    width: 70%;
    padding-right: 12px;
    height: 90%;
  }
  @media (max-width: 390px) {
    padding: 0;
  }
`;

Container.Header = styled.div`
  position: relative;
  @media (max-width: 660px) {
    width: 30%;
    padding-right: 12px;
  }
`;

Container.Img = styled.img`
  width: 300px;
  height: 300px;
  @media (max-width: 660px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 540px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 440px) {
    width: 100px;
    height: 100px;
  }
`;
Container.Priority = styled.div`
  position: absolute;
  top: 7%;
  left: 0%;
  width: 65px;
  height: 32px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #e23535;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 390px) {
    width: 44px;
    height: 22px;
    font-size: 12px;
    line-height: 14px;
  }
`;
Container.Body = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (max-width: 390px) {
    padding: 0;
  }
`;
Container.Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #191919;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: "Source Sans Pro", "sans-serif";
  @media (max-width: 660px) {
    font-size: 16px;
  }
  @media (max-width: 390px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
Container.Parag = styled.p`
  font-family: "Source Sans Pro", "sans-serif";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #191919;
  flex: none;
  order: 1;
  flex-grow: 0;
  padding: 12px 0;
  @media (max-width: 410px) {
    padding: 6px 0;
  }
  @media (max-width: 390px) {
    font-size: 12px;
    line-height: 16px;
    padding: 3px 0;
  }
`;

Container.Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 10px auto;
  padding-bottom: 15px;
  @media (max-width: 390px) {
    padding-bottom: 8px;
  }
`;

Container.Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 32px;
  gap: 10px;
  background: #ff7010;
  border-radius: 6px;
  border: none;
  user-select: none;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
  // for text
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 660px) {
    display: none;
  }
`;
Container.Price = styled.h2`
  font-family: "Source Sans Pro", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #ff7010;
  @media (max-width: 390px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 7px 16px;
    gap: 10px;
    width: 93px;
    height: 32px;
    background: #ffeee2;
    border-radius: 6px;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    user-select: none;
    :active {
      transform: scale(0.96);
    }
  }
`;
Container.Cost = styled.div`
  display: none;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #ff7010;
  @media (max-width: 660px) {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-decoration-line: line-through;
    color: #a5a5a5;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  @media (min-width: 391px) {
    display: none;
  }
`;
export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 888;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  overflow-y: auto;
`;
export const ModalDes = styled.div`
  width: 1070px;
  height: 680px;
  background-color: #ffffff;
  z-index: 999;
  position: relative;
  display: flex;
  border-radius: 24px;
  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  @media (max-height: 437px) {
    overflow-y: auto;
    height: 120vh;
  }
`;

export const Box1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;

Box1.Img = styled.img`
  width: 80%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: scale(
    ${({ type }) =>
      type == 20 ? "1" : type === 28 ? "1.05" : type === 33 ? "1.08" : "1"}
  );
  @media (max-width: 650px) {
    width: 40%;
  }
`;

Box1.Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 40px;
  position: absolute;
  top: 40px;
  left: 0;
  background: #e23535;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  background-color: #ffffff;
  flex: 1;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  @media (max-width: 650px) {
    flex: 2;
  }
  p {
    :active {
      color: red;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

TitleWrapper.Img = styled.img`
  width: 18px;
  margin-right: 10px;
`;

TitleWrapper.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #191919;
`;

export const Recipe = styled.div`
  width: 100%;
  margin: 10px 0 10px 0;
  display: flex;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  font-size: 20px;
  color: #191919;
  @media (max-width: 915px) {
    font-size: 15px;
  }
`;

export const IngridientsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  @media (max-width: 650px) {
    overflow-x: scroll;
    display: flex;
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }
  }
`;

export const IngridientsCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 650px) {
    margin-right: 20px;
  }
`;

export const IngridientsCard = styled.div`
  width: 105px;
  height: 105px;
  background: #ffffff;
  border: ${({ add }) =>
    add === false ? "1px solid #f0f0f0" : "1px solid #FF7010"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 8px;
  @media (max-width: 915px) {
    width: 90px;
    height: 90px;
    margin-right: 5px;
  }
`;

IngridientsCard.Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #191919;
  width: 80px;
  text-align: center;
  @media (max-width: 915px) {
    font-size: 12px;
  }
`;

export const Cheese = styled(cheese)``;
export const Cucumber = styled(cucumber)``;
export const Pepperoni = styled(pepperoni)``;
export const Sauce = styled(sauce)``;

export const Category = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  display: flex;
  cursor: pointer;
`;

export const Traditional = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex: 1;
  background-color: ${({ type }) => (type === false ? "#ff7010" : "#FFFFFF")};
  color: ${({ type }) => (type === false ? "#ffffff" : "#000")};
`;

export const Thin = styled.div`
  flex: 1;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ type }) => (type === true ? "#ff7010" : "#FFFFFF")};
  color: ${({ type }) => (type === true ? "#ffffff" : "#000")};
`;

export const Size = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Small = styled.div`
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 16px;
  flex: 1;
  background-color: ${({ type }) => (type === 20 ? "#ff7010" : "#FFFFFF")};
  color: ${({ type }) => (type === 20 ? "#ffffff" : "#000")};
`;

export const Medium = styled.div`
  border-radius: 6px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ type }) => (type === 28 ? "#ff7010" : "#FFFFFF")};
  color: ${({ type }) => (type === 28 ? "#ffffff" : "#000")};
`;

export const Large = styled.div`
  flex: 1;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ type }) => (type === 33 ? "#ff7010" : "#FFFFFF")};
  color: ${({ type }) => (type === 33 ? "#ffffff" : "#000")};
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #ff7010;
  margin-right: 12px;
`;

export const Weight = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #a5a5a5;
`;

export const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 40px;
  gap: 10px;
  background: #ff7010;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

export const Close = styled.div`
  position: absolute;
  font-size: 40px;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;
