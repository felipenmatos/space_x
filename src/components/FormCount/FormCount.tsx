import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import rocket from "../../assets/icons/rocket.png";

type FormCountTypes = {
  text: string;
};

function FormCount({ text }: FormCountTypes) {
  return (
    <Container>
      <Icon src={rocket} alt="rocket" />
      <Title title="Iniciando em..." />
      <Subtitle>{text}</Subtitle>
    </Container>
  );
}

const Container = styled.div`
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
  margin-top: -9%;
`;

const Subtitle = styled.p`
  display: absolute;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
  transform: translatey(-10px);
  text-shadow: 0 0 3px magenta, 0 0 7px magenta, 0 0 15px black, 0 0 15px black;
  animation: hover 1s ease-in-out infinite;
  @keyframes hover {
    0% {
      transform: translatey(-10px) perspective(200px) translatez(0);
    }
    50% {
      transform: translatey(-10px) perspective(200px) translatez(50px);
    }
    100% {
      transform: translatey(-10px) perspective(200px) translatez(0);
    }
  }
`;

export default FormCount;
