import styled from "styled-components";
import colors from "../../Styles/colors";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.cream};
  position: relative;
`;

export const Content = styled.div`
  max-width: 100%;
  width: 40%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
