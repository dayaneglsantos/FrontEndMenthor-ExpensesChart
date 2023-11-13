import {
  Amount,
  AmountFill,
  Balance,
  Chart,
  ChartContainer,
  ChartItem,
  MainContainer,
  TotalMonth,
} from "./styles";
import logo from "../../assets/Images/logo.svg";
import P from "prop-types";

const Main = ({ data }) => {
  const maxItem = data.reduce(
    (max, item) => (item.amount > max.amount ? item : max),
    data[0]
  );

  return (
    <MainContainer>
      <Balance>
        <div>
          <h1>My balance</h1>
          <span>$921,48</span>
        </div>
        <img src={logo} alt="Logo" />
      </Balance>
      <ChartContainer>
        <h2>Spending - Last 7 days</h2>
        <Chart>
          {data.map((item, index) => (
            <ChartItem key={index}>
              <div className="amountData">
                <Amount>${item.amount}</Amount>
                <AmountFill
                  fillPercentage={(item.amount / 100) * 100}
                  isMax={item.amount === maxItem.amount}
                />
                <span>{item.day}</span>
              </div>
            </ChartItem>
          ))}
        </Chart>
        <TotalMonth>
          <div>
            <h3>Total this month</h3>
            <span className="totalMonth">$478,33</span>
          </div>
          <div className="difference">
            <span>+2,4%</span>
            <p>from last month</p>
          </div>
        </TotalMonth>
      </ChartContainer>
    </MainContainer>
  );
};
export default Main;

Main.propTypes = {
  data: P.object,
};
