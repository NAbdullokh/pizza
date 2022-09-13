import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 910px) {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Img = styled.img`
  width: 280px;
  height: 320px;
  @media (max-width: 1520px) {
    width: 280px;
    height: 320px;
  }

  @media (max-width: 1260px) {
    width: 220px;
    height: 260px;
  }
  @media (max-width: 1100px) {
    width: 200px;
    height: 240px;
  }
  @media (max-width: 1020px) {
    width: 180px;
    height: 200px;
  }
  @media (max-width: 910px) {
    margin-right: 20px;
  }
`;
