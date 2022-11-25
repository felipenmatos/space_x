import React from "react";
import styled from "styled-components";
import axios from "axios";
import backgroundWhite from "../../src/assets/background/Background-Login.png";
import backgroundWhiteMobile from "../../src/assets/background/Background-Login-Mobile.png";
import rocket from "../../src/assets/icons/rocket.png";
import logo from "../../src/assets/icons/SpaceX.svg";
import Title from "../components/Title/Title";
import FormCount from "../components/FormCount/FormCount";
import { useNavigate } from "react-router-dom";
import { useHook } from "../context/state";
import { urlDataLaunches, urlDataStatus } from "../api/api";

function Login() {
  const { userContext } = useHook();
  const { name, setName } = userContext;
  const [error, setError] = React.useState(false);
  const [bodyForm, setBodyForm] = React.useState(true);
  const [bodyCount, setBodyCount] = React.useState(false);
  const [dataLaunches, setDataLaunches] = React.useState([]);
  const [dataStatus, setDataStatus] = React.useState([]);
  const navigate = useNavigate();

  const Tempo_Total = 0;
  const [tempoRestante, setTempoRestante] = React.useState(Tempo_Total);

  const formataTempo = (time) => {
    let secunds = time % 60;
    if (secunds < 10) {
      secunds = `${secunds}`;
    }

    return `${secunds}`;
  };

  const startTimer = () => {
    setTimeout(() => {
      if (tempoRestante > 0) {
        setTempoRestante(tempoRestante - 1);
      }
    }, 1000);
  };

  const submit = () => {
    if (!name) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    } else {
      setBodyCount(true);
      setBodyForm(false);
      setTempoRestante(tempoRestante + 3);
      const getData = async () => {
        const response = await axios.get(urlDataLaunches);
        setDataLaunches(response);
        console.log(dataLaunches);
      };
      getData();
      const getDataStatus = async () => {
        const responseStatus = await axios.get(urlDataStatus);

        setDataStatus(responseStatus);
        console.log(dataStatus, "server online");
      };
      getDataStatus();
      setTimeout(() => {
        navigate("/Home");
        setBodyCount(false);
        setBodyForm(true);
      }, 4000);
      localStorage.setItem("current_user", "autenticado");
    }
  };

  startTimer();

  return (
    <Container>
      <Row>
        <BodyLogo>
          <Logo src={logo} alt="logo" />
        </BodyLogo>
        <BodyForm>
          {bodyForm && (
            <Form>
              <Icon src={rocket} alt="rocket" />
              <>
                <Title title="Decolagem" />
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={20}
                  placeholder="Digite seu primeiro nome..."
                  style={
                    error ? { border: "1px solid #305dff" } : { border: "none" }
                  }
                />
                {error && (
                  <Error>Preencha seu nome para iniciar a decolagem.</Error>
                )}
                <Button onClick={() => submit()}>Entrar</Button>
              </>
            </Form>
          )}
          {bodyCount && <FormCount text={formataTempo(tempoRestante)} />}
        </BodyForm>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-image: url(${backgroundWhite});
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

  @media (max-width: 580px) {
    background-image: url(${backgroundWhiteMobile});
  }
`;

const Row = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 888px) {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
`;

const BodyLogo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 888px) {
    width: 100%;
    height: 10vh;
  }
`;

const Logo = styled.img`
  @media (max-width: 580px) {
    width: 150px;
  }
`;

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

  @media (max-width: 888px) {
    width: 370px;
    height: 370px;
  }

  @media (max-width: 580px) {
    width: 320px;
    height: 320px;
  }
`;

const Icon = styled.img`
  width: 49px;
  height: 62px;
  transform: rotate(29.63deg);
  margin-top: -5%;

  @media (max-width: 580px) {
    width: 39px;
    height: 52px;
  }
`;

const Input = styled.input`
  width: 280px;
  height: 40px;
  padding: 5px 5px;
  background: rgba(0, 0, 0, 0.63);
  border-radius: 50px;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-wheight: 400;
  font-size: 20px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;

  :placeholder {
    font-family: "Roboto", sans-serif;
    font-wheight: 400;
    font-size: 20px;
    line-height: 42px;
  }

  @media (max-width: 580px) {
    width: 240px;
    height: 35px;
    font-size: 18px;
  }
`;

const Error = styled.p`
  margin-top: -10px;
  margin-bottom: -32px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 42px;
  text-align: center;
  color: #305dff;

  @media (max-width: 580px) {
    font-size: 13px;
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

  @media (max-width: 580px) {
    font-size: 20px;
  }
`;

export default Login;
