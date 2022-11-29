import { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./Layouts/Footer/Footer";
import Navigation from "./Layouts/Navigation/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Roadmap from "./components/Roadmap/Roadmap";
import Showcase from "./components/Showcase/Showcase";
import Team from "./components/Team/Team";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
      <GlobalStyles>
        <ThemeProvider theme={light}>
          <Navigation />
          <Home />
          <About />
          <Roadmap />
          <Showcase />
          <Team />
          <FAQ />
          <Footer />
        </ThemeProvider>
      </GlobalStyles>
    </>
  );
}

export default App;
