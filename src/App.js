import "./App.css";
import React, { useRef } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
// import StudyPortal from "energy-charts";
import useFetch from "energy-charts/dist/hooks/useFetch";
import logo from "./logo.svg";

function App() {
  const cache = useRef({});
  const topics = ["tim-scenario"];
  const org = "MaREI-EPMG";

  const [isReposLoading, repositories] = useFetch(
    `https://api.github.com/orgs/${org}/repos`,
    cache
  );

  //  const orgGhPages = `https://${org}.github.io/`;

  const topicRepos = isReposLoading
    ? null
    : repositories.filter((repository) => {
        return (
          topics.some((topic) => repository.topics.includes(topic)) &&
          repository.has_pages
        );
      });

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
          {topicRepos &&
            topicRepos.map((topicRepo, idx) => (
              <Col className="p-2" key={idx}>
                <Card bg="success">
                  <Card.Header>{topicRepo.name}</Card.Header>
                  <Card.Body>{topicRepo.description}</Card.Body>
                  <Card.Footer>
                    <Button
                      variant="light"
                      href={`https://github.com/${org}/${topicRepo.name}`}
                    >
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
