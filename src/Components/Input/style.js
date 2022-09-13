import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  padding: 16px 32px 16px 32px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  width: 100%;
  height: 85px;
  margin-bottom: 20px;
  @media (max-width: 810px) {
    height: 150px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #191919;
  margin-right: 20px;
  min-width: 20%;
  @media (max-width: 810px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 650px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    transform: scale(0.85);
  }
`;

InputWrapper.Icon = styled.img`
  position: absolute;
  top: 12px;
  left: 40px;
`;

InputWrapper.Input = styled.input`
  margin-left: 15px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  width: 90%;
  height: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #a5a5a5;
  padding-left: 55px;
  :focus {
    border: 1px solid #a5a5a5;
  }
  @media (max-width: 550px) {
    width: 320px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

Container.Btn = styled.button`
  width: 150px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff7010;
  border-radius: 6px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
  color: #ffffff;
  @media (max-width: 910px) {
    display: none;
  }
  :active {
    transform: scale(0.98);
  }
`;

Container.Btn2 = styled.button`
  position: absolute;
  top: -5px;
  right: 0;
  width: 60px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff7010;
  border-radius: 6px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  display: none;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
  @media (max-width: 910px) {
    display: block;
  }
  @media (max-width: 810px) {
    top: 0;
    margin-right: 15px;
  }
`;
