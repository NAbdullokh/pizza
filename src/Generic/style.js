import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Container = styled.div`
  width: 1070px;
  height: 680px;
  display: flex;
  background: #ffffff;
  border-radius: 24px;
`;

export const Box1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  position: relative;
`;

Box1.Img = styled.img`
  width: 85%;
  height: 45vh;
`;

Box1.New = styled.div`
  position: absolute;
  top: 7%;
  left: 0%;
  width: 82px;
  height: 40px;
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
`;

export const Box2 = styled.div`
  flex: 1;
  background-color: green;
`;
