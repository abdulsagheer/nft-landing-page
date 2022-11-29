import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

function App() {
  return (
    <>
      <GlobalStyles>
        <ThemeProvider theme={light}>
          <div className="App">
            <h1>NFT Landing Page</h1>
          </div>
        </ThemeProvider>
      </GlobalStyles>
    </>
  );
}

export default App;
