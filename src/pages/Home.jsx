import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;

  @media (max-width: 888px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
`;

export default Home;
