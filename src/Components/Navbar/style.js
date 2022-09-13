import styled from "styled-components";
import location from "../../Assets/icon/location.svg";
import user from "../../Assets/icon/user.svg";
export const Container = styled.div`
@media (max-width:500px){
  width:100% ;
}
`

Container.Main = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 5%;
  background: #ffffff;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  @media (max-width: 300px) {
    width: 100%;
    padding: 0 5%;
  }
  @media (max-width: 350px) {
    width: 100%;
    padding: 0 5%;
  }
  @media (max-width: 450px) {
    width: 100%;
    padding: 0 4%;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0 5%;
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 5%;
    justify-content: space-between;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 5%;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const Img = styled.img.attrs({
  src: location,
})`
  width: 22px;
  height: 22px;
  margin-right: 15px;

  @media (max-width: 300px) {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  @media (max-width: 350px) {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  @media (max-width: 450px) {
    width: 26px;
    height: 26px;
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  @media (max-width: 650px) {
    width: 13px;
    height: 13px;
    margin-right: 5px;
  }
  @media (max-width: 800px) {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
  @media (max-width: 1024px) {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  @media (max-width: 1110px) {
    width: 19px;
    height: 19px;
    margin-right: 8px;
  }
  @media (max-width: 1440px) {
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }
`;

Container.Span = styled.span`
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
  @media (max-width: 300px) {
    font-size: 7px;
    line-height: 8px;
    font-weight: 500;
  }
  @media (max-width: 350px) {
    font-size: 10px;
    line-height: 16px;
    font-weight: 500;
  }
  @media (max-width: 402px) {
    font-size: 12px;
    line-height: 16px;
    font-weight: 800;
  }
  @media (max-width: 450px) {
    font-size: 18px;
    line-height: 18px;
    font-weight: 800;
  }
  @media (max-width: 501px) {
    font-size: 16px;
    line-height: 18px;
    font-weight: 800;
  }
  @media (max-width: 600px) {
    font-size: 13px;
    line-height: 14px;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
  }
`;

export const It = styled.div`
  display: flex;
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
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
`;
Item.Wrap = styled.div`
  display: flex;
`;

export const IMG = styled.img.attrs({
  src: user,
})`
  width: 22px;
  height: 22px;
  margin-right: 15px;
  @media (max-width: 300px) {
    width: 12px;
    height: 12px;
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
  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 651px) {
    width: 12px;
    height: 12px;
    margin-right: 8px;
  }
  @media (max-width: 800px) {
    width: 13px;
    height: 13px;
    margin-right: 2px;
  }

  @media (max-width: 1024px) {
    width: 15px;
    height: 15px;
    margin-right: 8px;
  }
  @media (max-width: 1110px) {
    width: 17px;
    height: 17px;
    margin-right: 8px;
  }
  @media (max-width: 1440px) {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;
Container.H = styled.div`
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
  @media (max-width: 650px) {
    font-size: 8px;
    line-height: 8px;
    font-weight: 500;
  }
  @media (max-width: 652px) {
    font-size: 10px;
    line-height: 10px;
    font-weight: 500;
  }
  @media (max-width: 850px) {
    font-weight: 500;
    font-size: 11px;
    line-height: 11px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
  }
  @media (max-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
  }
`;

Container.P = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #191919;
  :hover {
    transform: scale(1);
    font-weight: 500;
    color: red;
  }
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
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 652px) {
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
  }
  @media (max-width: 800px) {
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
  }
  @media (max-width: 1100px) {
    font-size: 13px;
    line-height: 13px;
    font-weight: 500;
  }
  @media (max-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
  }
`;
