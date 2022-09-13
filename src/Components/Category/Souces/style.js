import styled from "styled-components";

export const Container = styled.div`
  width: 1250px;
  margin: 0 auto;
  @media (max-width: 1250px) {
    width: 1100px;
  }
  @media (max-width: 1100px) {
    width: 950px;
  }
  @media (max-width: 1000px) {
    width: 850px;
  }
  @media (max-width: 900px) {
    width: 750px;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
`;
