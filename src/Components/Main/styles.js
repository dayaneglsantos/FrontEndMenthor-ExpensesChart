import styled from "styled-components";
import colors from "../../Styles/colors";

export const MainContainer = styled.div`
  width: 100%;
`;

export const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  background-color: ${colors.red};
  border-radius: 16px;
  color: ${colors.almostWhite};

  h1 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 12px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ChartContainer = styled.div`
  background-color: ${colors.almostWhite};
  border-radius: 16px;
  padding: 24px;
  margin-top: 24px;
`;

export const Chart = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  margin: 24px 0;
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.cream};
`;

export const Amount = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: ${colors.almostWhite};
  padding: 4px;
  font-size: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  visibility: hidden;
`;

export const AmountFill = styled.div`
  width: 45px;
  height: ${(props) => props.fillPercentage}%;
  background-color: ${(props) => (props.isMax ? colors.blue : colors.red)};
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 35px;
  }
`;

export const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    color: ${colors.mediumBrown};
    font-size: 12px;
    margin-top: 8px;
  }

  .amountData {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    cursor: pointer;

    &:hover ${Amount} {
      visibility: visible;
    }

    &:hover ${AmountFill} {
      opacity: 0.7;
    }
  }
`;

export const TotalMonth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  h3 {
    color: ${colors.mediumBrown};
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 8px;
  }

  .totalMonth {
    font-size: 32px;
    font-weight: bold;
    color: ${colors.brown};
  }

  .difference {
    text-align: end;

    span {
      margin-bottom: 16px;
      font-weight: bold;
      color: ${colors.brown};
    }
  }
`;
