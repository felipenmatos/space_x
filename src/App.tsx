import React from "react";
import styled from "styled-components";
import backgroundWhite from "../src/assets/background/Background-Login.png";
//import sun from "../src/icons/sun.png";
//import moon from "../src/assets/icons/moon.png";
//import rocket from "../src/assets/icons/rocket.png";
//import logo from "../src/assets/icons/SpaceX.svg";

function App() {
  return (
    <Container>
      <Header>
        <ButtonTema alt="tema" />
      </Header>
      <Row>
        <BodyLogo>
          <Logo alt="logo" />
        </BodyLogo>
        <BodyForm>
          <Form>
            <Icon alt="rocket" />
            <Title>Decolagem</Title>
            <Input
              type="text"
              maxLength={20}
              placeholder="Digite seu primeiro nome..."
            />
            <Button>Entrar</Button>
          </Form>
        </BodyForm>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundWhite});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
`;

const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonTema = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 90%;
  cursor: pointer;
`;

const Row = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const BodyLogo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img``;

const BodyForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(189, 0, 255, 0.43);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;

const Icon = styled.img`
  width: 49px;
  height: 62px;
  transform: rotate(29.63deg);
  margin-top: -5%;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #ffffff;
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 5px 5px;
  background: rgba(0, 0, 0, 0.63);
  border-radius: 50px;
  outline: none;
  border: none;
  font-family: "Roboto", sans-serif;
  font-wheight: 400;
  font-size: 16px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;

  :placeholder {
    font-family: "Roboto", sans-serif;
    font-wheight: 400;
    font-size: 16px;
    line-height: 42px;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 10%;
  background: #ffffff;
  border-radius: 50px;
  text-align: center;
  border: none;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #bd00ff;
  cursor: pointer;

  :hover {
    background: transparent;
    color: #ffffff;
    border: 2px solid #bd00ff;
  }
`;

export default App;
