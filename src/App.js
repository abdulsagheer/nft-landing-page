import { ThemeProvider } from "styled-components";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

function App() {
  return (
    <>
      <GlobalStyles>
        <ThemeProvider theme={light}>
          <Navigation />
        </ThemeProvider>
      </GlobalStyles>
    </>
  );
}

export default App;
