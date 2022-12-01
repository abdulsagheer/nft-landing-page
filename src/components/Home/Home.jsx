import React from "react";
import styled from "styled-components";
import TypeWriterText from "../TypeWriterText/TypeWriterText";

const Section = styled.section`
  min-height: ${(props) => `cal(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: $(props => props.theme.context);
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <h1>
            <TypeWriterText />
          </h1>
        </Box>
        <Box>
          <h1>Video</h1>
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
