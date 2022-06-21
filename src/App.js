import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Col, Row } from "react-bootstrap";

function App() {
  const repositories = [
    {
      name: "tim-carbon-budgets-2022",
      description: "TIM sectoral carbon budgets study"
    },
    {
      name: "tim-carbon-budgets-2021",
      description: "TIM carbon budgets scenarios 2021"
    },
    {
      name: "tim-energy-security-2022",
      description: "TIM energy security scenarios 2022"
    }
  ];

  const orgUrl = "https://github.com/MaREI-EPMG";

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.marei.ie/energy-policy-modelling/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
          <p>Energy Policy and Modelling Group (EPMG)</p>
        </a>
        <Row
          xs={"auto"}
          className="py-2 justify-content-center align-items-center"
        >
          {repositories.map((repository, idx) => (
            <Col className="p-2" key={idx}>
              <Card bg="success">
                <Card.Header>{repository.name}</Card.Header>
                <Card.Body>{repository.description}</Card.Body>
                <Card.Footer>
                  <Button variant="light" href={`${orgUrl}/${repository.name}`}>
                    Explore
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </header>
    </div>
  );
}

export default App;
