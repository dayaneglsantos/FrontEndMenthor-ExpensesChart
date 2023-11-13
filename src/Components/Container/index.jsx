import P from "prop-types";
import { Content, Div } from "./styles";

const Container = ({ children }) => {
  return (
    <Div>
      <Content>{children}</Content>
    </Div>
  );
};
export default Container;

Container.propTypes = {
  children: P.node.isRequired,
};
