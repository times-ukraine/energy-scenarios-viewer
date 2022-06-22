import "./App.css";
import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import StudyPortal from "energy-charts";
import useFetch from "energy-charts/dist/hooks/useFetch";
import { RepoCardsSection } from "./components";
import logo from "./logo.svg";
import config from "./config";

function App() {
  const cache = useRef({});
  const topics = ["tim-scenario"];

  const [isReposLoading, repositories] = useFetch(
    "https://api.github.com/orgs/MaREI-EPMG/repos",
    cache
  );

  const topicRepos = isReposLoading
    ? null
    : repositories.filter((repository) => {
        return (
          topics.some((topic) => repository.topics.includes(topic)) &&
          repository.has_pages
        );
      });

  return (
    <Routes>
      <Route
        path="/"
        element={
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
              <RepoCardsSection repositories={topicRepos} cardBg="success" />
            </header>
          </div>
        }
      />
      {topicRepos &&
        topicRepos.map((topicRepo, idx) => (
          <Route
            key={idx}
            path={`${topicRepo.name}/*`}
            element={<StudyPortal config={config[topicRepo.name]} />}
          />
        ))}
    </Routes>
  );
}

export default App;
