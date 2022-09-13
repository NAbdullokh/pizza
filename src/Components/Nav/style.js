import styled from "styled-components";
import logo from "../../Assets/icon/logos.svg";
import korzina from "../../Assets/icon/korzina.svg";
// RightNav
import logos from "../../Assets/icon/user.svg";
import phone from "../../Assets/icon/phone.svg";
import lacation from "../../Assets/icon/lacation.svg";
import facebook from "../../Assets/icon/facebook.svg";
import instagram from "../../Assets/icon/instagram.svg";
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #ffffff;
  padding: 0 5% 0 5%;
  height: 60px;
  align-items: center;
  @media (max-width: 300px) {
    padding: 0 5%;
    width: 100%;
  }
  @media (max-width: 350px) {
    padding: 0 5%;
    width: 100%;
  }
  @media (max-width: 450px) {
    padding: 0 5%;
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 0 5%;
    width: 100%;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Img1 = styled.img.attrs({
  src: logo,
})`
  width: 32px;
  height: 32px;
  margin-right: 15px;
  @media (max-width: 300px) {
    width: 23px;
    height: 23px;
    margin-right: 10px;
  }
  @media (max-width: 350px) {
    width: 23px;
    height: 23px;
    margin-right: 10px;
  }
  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
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
  @media (max-width: 300px) {
    display: none;
  }
  @media (max-width: 350px) {
    display: none;
  }
  @media (max-width: 450px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
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

export const Navbar = styled.nav`
  width: 180px;
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
  @media (min-width: 501px) {
    display: none;
  }
`;

export const Span = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #191919;
  @media (max-width: 500px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #191919;
    margin-left: 15px;
  }
`;

Span.P = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #a5a5a5;
  @media (max-width: 500px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #a5a5a5;
    margin: 50px 0 5px 90px;
  }
`;

// RightNav
export const Ul = styled.ul`
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
  li {
    list-style-type: none;
  }
  @media (max-width: 500px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 6.8rem;
    left: 0;
    height: 100%;
    width: 100%;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 10px 28px;
      justify-content: space-around;
      align-items: center;
      text-align: start;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #191919;
    }
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  @media (max-width: 500px) {
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    /* margin-right:15px ; */
  }
`;
export const Img = styled.img.attrs({
  src: logos,
})`
  width: 25px;
  height: 25px;
  @media (max-width: 500px) {
    margin-left: 20px;
    width: 23px;
    height: 23px;
    margin-bottom: 41px;
  }
`;

export const Phone = styled.img.attrs({
  src: phone,
})`
  width: 25px;
  height: 25px;
  @media (max-width: 500px) {
    margin-left: 15px;
    width: 20px;
    height: 20px;
  }
`;

export const Lacation = styled.img.attrs({
  src: lacation,
})`
  width: 25px;
  height: 25px;
  @media (max-width: 500px) {
    margin-left: 15px;
    width: 20px;
    height: 20px;
  }
`;
export const Facebook = styled.img.attrs({
  src: facebook,
})`
  width: 25px;
  height: 25px;
  @media (max-width: 500px) {
    margin-left: 5px;
    width: 20px;
    height: 20px;
  }
`;
export const Instagram = styled.img.attrs({
  src: instagram,
})`
  width: 25px;
  height: 25px;
  @media (max-width: 500px) {
    margin-left: 24px;
    width: 20px;
    height: 20px;
  }
`;

export const P = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #191919;
  @media (max-width: 500px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 10px 47px 10px;
  }
`;

export const HR = styled.hr`
  @media (max-width: 499px) {
    width: 100%;
    color: 1px solid #f0f0f0;
    margin: 5px 0 0 0;
  }
`;

export const DIV = styled.div`
  display: flex;
  padding: 10px;
  margin: 5px 0 0 0;
  align-items: center;
`;

// Burger
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 65px;
  right: 20px;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
