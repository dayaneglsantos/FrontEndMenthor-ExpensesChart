import Container from "./Components/Container";
import Main from "./Components/Main";
import GlobalStyle from "./Styles/global-styles";
import data from "../data.json";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Main data={data} />
      </Container>
    </>
  );
}

export default App;
