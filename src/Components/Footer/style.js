import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding-top: 15px;
  margin-top: 10px;
`;

export const Wrap = styled.div`
  width: 1290px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1290px) {
    width: 1100px;
  }
  @media (max-width: 1100px) {
    width: 950px;
  }
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    width: 850px;
  }
  @media (max-width: 900px) {
    flex-wrap: wrap;
    width: 750px;
  }
  @media (max-width: 750px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 90%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

Wrap.Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 40%;
    margin-left: 20px;
  }
  @media (max-width: 850px) {
    width: 90%;
    margin-left: 20px;
  }
`;

Wrap.Logo = styled.img`
  height: 44px;
  width: 200px;
`;
Wrap.Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #191919;
`;
Wrap.Link = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
Wrap.Text = styled.p`
  color: #191919;
  font-family: "Source Sans Pro", "sans-serif";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin: 10px;
`;
Wrap.Emblem = styled.img`
  height: 20px;
  width: 20px;
  color: #ff7010;
`;

export const FooterEnd = styled.div`
  padding-bottom: 15px;
  text-align: center;
`;

FooterEnd.Title = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #191919;
`;
