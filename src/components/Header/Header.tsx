import React from "react";
import logo from "../../assets/icons/SpaceX-Home.svg";
import styled from "styled-components";

type HeaderTypes = {
  onClick: () => void;
  name: string;
};

function Header({ onClick, name }: HeaderTypes) {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Row>
        <Text>Seja bem vindo(a), {name}</Text>
        <Button onClick={onClick}>Sair</Button>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  margin-left: 20px;

  @media (max-width: 580px) {
    width: 130px;
  }
`;

const Row = styled.div`
  margin-right: 20px;
  width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 580px) {
    width: 80px;
  }
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 880px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #bd00ff;
  border-radius: 50px;
  text-align: center;
  border: none;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  :hover {
    background: transparent;
    color: #ffffff;
    border: 2px solid #bd00ff;
  }

  @media (max-width: 580px) {
    width: 80px;
    height: 40px;
    font-size: 20px;
  }
`;

export default Header;
