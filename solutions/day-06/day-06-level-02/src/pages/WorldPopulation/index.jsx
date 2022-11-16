import Title from "../../components/Title";
import ProgressBar from "react-bootstrap/ProgressBar";
import { GridStyle, Name } from "./styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tenHighestPopulation from "./data";
const [{ population: maxPopulation }] = tenHighestPopulation;

const Country = ({ country: { country, population } }) => {
  return (
    <Row>
      <Col md={2}>
        <Name>{country}</Name>
      </Col>
      <Col md={8}>
        <ProgressBar
          style={{ height: "30px", margin: "1vh 0" }}
          animated
          max={maxPopulation}
          now={population}
          label={`${((population * 100) / maxPopulation).toFixed(1)}%`}
        />
      </Col>
      <Col md={2}>
        <Name>
          {population.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </Name>
      </Col>
    </Row>
  );
};

const Countries = () => {
  const countryList = tenHighestPopulation.map((country, i) => (
    <Country key={i} country={country} />
  ));
  return <div>{countryList}</div>;
};

const WorldPopulation = () => {
  return (
    <>
      <Title subtitle={"world population"} />
      <GridStyle>
        <Container>
          <Countries countries={tenHighestPopulation} />
        </Container>
      </GridStyle>
    </>
  );
};

export default WorldPopulation;
