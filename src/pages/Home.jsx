import React from "react";
import styled from "styled-components";
import background from "../assets/background/BackgroundHome.png";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title/Title";

function Home() {
  const navigate = useNavigate();

  function exit() {
    navigate("/");
  }

  return (
    <Container>
      <Header onClick={() => exit()} name="Felipe" />
      <Body>
        <BodyData>
          <Title title="Dados analíticos dos lançamentos" />
          <RowData>
            <ContainerData>infos</ContainerData>
            <ContainerData>infos</ContainerData>
          </RowData>
        </BodyData>
        <BodyDataDetails>
          <Title title="Registro de lançamentos" />
          <RowSearch>
            <SearchInput placeholder="Pesquisar por..." />
            <ButtonSearch>Buscar</ButtonSearch>
          </RowSearch>
          <ContainerDetails>
            <Labels>
              <Label>Texto1</Label>
              <Label>Texto1</Label>
              <Label>Texto1</Label>
              <Label>Texto1</Label>
              <Label>Texto1</Label>
              <Label>Texto1</Label>
              <Label>Texto1</Label>
            </Labels>
            <Details>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
            </Details>
            <Details>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
            </Details>
            <Details>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
            </Details>
            <Details>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
            </Details>
            <Details>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
              <Text>Texto1</Text>
            </Details>
          </ContainerDetails>
        </BodyDataDetails>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100vw 100%;

  @media (max-width: 888px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const BodyData = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

const RowData = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ContainerData = styled.div`
  width: 500px;
  height: 500px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(189, 0, 255, 0.43);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  animation: go-back 1s;

  @keyframes go-back {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const BodyDataDetails = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowSearch = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 450px;
  height: 40px;
  background: rgba(0, 0, 0, 0.59);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: none;
  text-align: center;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-wheight: 400;
  font-size: 16px;
  line-height: 42px;
  color: #ffffff;

  :placeholder {
    font-family: "Roboto", sans-serif;
    font-wheight: 400;
    font-size: 16px;
    line-height: 42px;
  }
`;

const ButtonSearch = styled.button`
  width: 150px;
  height: 40px;
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

const ContainerDetails = styled.div`
  width: 1080px;
  height: 500px;
  background: rgba(0, 0, 0, 0.59);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
`;

const Labels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;

const Details = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.58);
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 16px;
  text-align: center;
  color: #000;
`;

export default Home;
