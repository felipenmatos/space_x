import React from "react";
import styled from "styled-components";
import backgroundWhite from "../../src/assets/background/Background-Login.png";
import backgroundDark from "../../src/assets/background/Background-Dark.png";
import sun from "../../src/assets/icons/sun.png";
import moon from "../../src/assets/icons/moon.png";
import rocket from "../../src/assets/icons/rocket.png";
import logo from "../../src/assets/icons/SpaceX.svg";
import Title from "../components/Title/Title";
import FormCount from "../components/FormCount/FormCount";
import { useNavigate } from "react-router-dom";

function Login() {
  const [tema, setTema] = React.useState(false);
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(false);
  const [bodyForm, setBodyForm] = React.useState(true);
  const [bodyCount, setBodyCount] = React.useState(false);
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
      setTimeout(() => {
        navigate("/Home");
        setBodyCount(false);
        setBodyForm(true);
        setName("");
      }, 4000);
      localStorage.setItem("current_user", "autenticado");
    }
  };

  startTimer();

  return (
    <Container
      style={
        tema
          ? { backgroundImage: `url(${backgroundDark})` }
          : { backgroundImage: `url(${backgroundWhite})` }
      }
    >
      <Header>
        <ButtonTema
          src={tema ? sun : moon}
          alt="tema"
          onClick={() => setTema(!tema)}
        />
      </Header>
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

  @media (max-width: 888px) {
    width: 370px;
    height: 370px;
  }
`;

const Icon = styled.img`
  width: 49px;
  height: 62px;
  transform: rotate(29.63deg);
  margin-top: -5%;
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

export default Login;
