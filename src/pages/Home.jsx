import React from "react";
import styled from "styled-components";
import axios from "axios";
import background from "../assets/background/BackgroundHome.png";
import imgYoutube from "../assets/icons/youtube.png";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useHook } from "../context/state";
import Pagination from "../components/Pagination/Pagination";
import Title from "../components/Title/Title";
import { Chart } from "react-google-charts";
import { urlDataLaunches } from "../api/api";

let PageSize = 5;

function Home() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [dataLaunches, setDataLaunches] = React.useState([]);
  const [loading, setLoading] = React.useState(null);
  const [success, setSuccess] = React.useState();
  //const [search, setSearch] = React.useState("");
  const [fail, setFail] = React.useState();
  const [falcon, setFalcon] = React.useState();
  const [crs, setCrs] = React.useState();
  const [asia, setAsia] = React.useState();
  const [star, setStar] = React.useState();
  const [transporter, setTransporter] = React.useState();
  const [filterYear2020, setFilterYear2020] = React.useState();
  const [filterYear2021, setFilterYear2021] = React.useState();
  const [filterYear2022, setFilterYear2022] = React.useState();
  const { userContext } = useHook();
  const { name } = userContext;

  const data = [
    ["Task", "Hours per Day"],
    ["Falcon 1", falcon],
    ["CRS", crs],
    ["AsiaSat", asia],
    ["Starlink", star],
    ["Transporter", transporter],
  ];

  const datacolumns = [
    ["Element", "Lançamentos", { role: "style" }],
    ["2020", filterYear2020, "color: red"],
    ["2021", filterYear2021, "color: red"],
    ["2022", filterYear2022, "color: red"],
  ];

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataLaunches.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataLaunches]);

  const navigate = useNavigate();

  function exit() {
    navigate("/");
  }

  React.useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await axios.get(urlDataLaunches);
      setDataLaunches(response.data[0]);
      setLoading(false);
    };

    getData();
  }, []);

  React.useEffect(() => {
    const filtroSuccess = dataLaunches.filter((valorAtual) => {
      return valorAtual.success;
    });
    const fail = dataLaunches.length - filtroSuccess.length;
    setSuccess(filtroSuccess.length);
    setFail(fail);
    const filtroFalcon = dataLaunches.filter((valorAtual) => {
      if (valorAtual.name) {
        return valorAtual.name.includes("Falcon");
      }
    });
    setFalcon(filtroFalcon.length);
    const filtroCRS = dataLaunches.filter((valorAtual) => {
      if (valorAtual.name) {
        return valorAtual.name.includes("CRS");
      }
    });
    setCrs(filtroCRS.length);
    const filtroASIA = dataLaunches.filter((valorAtual) => {
      if (valorAtual.name) {
        return valorAtual.name.includes("Asia");
      }
    });
    setAsia(filtroASIA.length);
    const filtroSTAR = dataLaunches.filter((valorAtual) => {
      if (valorAtual.name) {
        return valorAtual.name.includes("Star");
      }
    });
    setStar(filtroSTAR.length);
    const filtroTransporter = dataLaunches.filter((valorAtual) => {
      if (valorAtual.name) {
        return valorAtual.name.includes("Transp");
      }
    });
    setTransporter(filtroTransporter.length);
    const filtro2020 = dataLaunches.filter((valorAtual) => {
      if (valorAtual.date_local) {
        return valorAtual.date_local.includes(2020);
      }
    });
    setFilterYear2020(filtro2020.length);
    const filtro2021 = dataLaunches.filter((valorAtual) => {
      if (valorAtual.date_local) {
        return valorAtual.date_local.includes(2021);
      }
    });
    setFilterYear2021(filtro2021.length);
    const filtro2022 = dataLaunches.filter((valorAtual) => {
      if (valorAtual.date_local) {
        return valorAtual.date_local.includes(2022);
      }
    });
    setFilterYear2022(filtro2022.length);
  }, [
    setSuccess,
    dataLaunches,
    setFalcon,
    setCrs,
    setStar,
    setAsia,
    setTransporter,
  ]);

  return (
    <Container>
      <Header onClick={() => exit()} name={name} />
      <Body>
        <BodyData>
          <Title title="Dados analíticos dos lançamentos" />
          <RowData>
            <ContainerData>
              <LabelChart>Lançamentos de foguetes</LabelChart>
              <DivChart>
                <ChartDiv
                  chartType="PieChart"
                  data={data}
                  width={"100%"}
                  height={"400px"}
                />
              </DivChart>
              <LabelChartResult>Resultado de lançamento:</LabelChartResult>
              <Row>
                <Text>Sucesso: </Text>
                <TextChartSuccess>{success}</TextChartSuccess>
              </Row>
              <Row>
                <Text>Falha: </Text>
                <TextChartFail>{fail}</TextChartFail>
              </Row>
            </ContainerData>
            <ContainerData>
              <LabelChart>Lançamentos por ano</LabelChart>
              <DivChart>
                <Chart
                  chartType="ColumnChart"
                  width="100%"
                  height="400px"
                  data={datacolumns}
                />
              </DivChart>
            </ContainerData>
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
              <Label>N° Vôo</Label>
              <Label>Logo</Label>
              <Label>Missão</Label>
              <Label>Data de Lançamento</Label>
              <Label>Foguete</Label>
              <Label>Resultado</Label>
              <Label>Vídeo</Label>
            </Labels>
            {loading && (
              <BodyLoading>
                <Loading />
              </BodyLoading>
            )}
            {!loading && (
              <>
                {currentTableData.map((item) => {
                  return (
                    <Details>
                      <Text>{item.flight_number}</Text>
                      {item.links && (
                        <LogoData src={item.links.patch.large} alt="logo" />
                      )}
                      <TextName>{item.name}</TextName>
                      <TextDate>
                        {new Date(item.date_local).toLocaleDateString("pt-BR", {
                          timeZone: "UTC",
                        })}
                      </TextDate>
                      <Text>{item.flight_number}</Text>
                      {item.success === true ? (
                        <ContainerSuccess>
                          <TextSuccesso>SUCESSO</TextSuccesso>
                        </ContainerSuccess>
                      ) : (
                        <ContainerFail>
                          <TextFail>FALHA</TextFail>
                        </ContainerFail>
                      )}
                      {item.links ? (
                        <LinkVideo href={item.links.webcast} target="_blank">
                          <ImgVideo src={imgYoutube} alt="Video" />
                        </LinkVideo>
                      ) : (
                        <LinkVideo target="_blank">
                          <ImgVideo src={imgYoutube} alt="Video" />
                        </LinkVideo>
                      )}
                    </Details>
                  );
                })}
              </>
            )}
            {!loading && (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={dataLaunches.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
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
  height: 660px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  align-items: center;
  background: #ffffff;
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

const LabelChart = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #000;
`;

const LabelChartResult = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #000;
`;

const ChartDiv = styled(Chart)``;

const DivChart = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const Row = styled.div`
  width: 50px;
  margin-top: -20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const TextChartSuccess = styled.p`
  margin-left: 5px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: green;
`;

const TextChartFail = styled.p`
  margin-left: 5px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: red;
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
  width: 600px;
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
  font-size: 20px;
  line-height: 42px;
  color: #ffffff;

  :placeholder {
    font-family: "Roboto", sans-serif;
    font-wheight: 400;
    font-size: 20px;
    line-height: 42px;
    color: #ffffff;
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
  width: 1380px;
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
  width: 99%;
  height: 55px;
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
  padding: 0px 5px;
`;

const LogoData = styled.img`
  width: 25px;
  height: 25px;
  margin-right: -25px;
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
  text-align: center;
  color: #000;
`;

const TextDate = styled.p`
  width: 140px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  text-align: center;
  margin-left: -50px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #000;
`;

const TextName = styled.p`
  width: 140px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  text-align: center;
  margin-left: -60px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #000;
`;

const ContainerSuccess = styled.div`
  margin-left: -20px;
  margin-right: -15px;
  width: 100px;
  height: 40px;
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContainerFail = styled.div`
  margin-left: -20px;
  margin-right: -15px;
  width: 100px;
  height: 40px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextSuccesso = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;

const TextFail = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;

const LinkVideo = styled.a`
  margin-left: -30px;
`;

const ImgVideo = styled.img`
  width: 35px;
  height: 30px;
`;

const BodyLoading = styled.div`
  width: 100px;
  margin-top: 10%;
  margin-left: 45%;
  align-items: center;
  display: flex;
  justify-content: center;
  transform: scale(5);
`;

const Loading = styled.div`
  animation: is-rotating 1s infinite;
  width: 10px;
  height: 10px;
  margin-top: 10%;
  border: 2px solid #e5e5e5;
  border-top-color: #51d4db;
  border-radius: 50%;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default Home;
