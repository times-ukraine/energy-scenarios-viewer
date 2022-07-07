import React from "react";
import StudyPortal from "energy-charts";
import useFetch from "energy-charts/dist/hooks/useFetch";
import {
  chartsInfo as commonChartsInfo,
  chartsTitles,
  seriesTitles,
  scenarioTitles,
  scenarios,
  routes,
  contentNavs
} from "../specs";

const chartsPath = "results/*";

const headerNavLinks = [{ to: "results", text: "Results" }];

const headerNavBrand = { brand: "Energy Scenarios", to: "/" };

const periods = Array.from(Array(31), (e, i) => 2020 + i);

const alert = {
  heading: "Work in progress...",
  text: "Please don't cite or use these results.",
  variant: "danger"
};

function Portal(props) {
  const { source, study, cache } = props;

  const [isRepoChartsInfoLoading, repoChartsInfo] = useFetch(
    `${source}/${study}/specs/chartsInfo.json`,
    cache
  );

  const chartsInfo = repoChartsInfo ? repoChartsInfo : commonChartsInfo;

  let config = {
    alert: alert,
    chartsPath: chartsPath,
    titles: {
      charts: chartsTitles,
      series: seriesTitles,
      scenarios: scenarioTitles
    },
    scenarios: scenarios[study],
    defaultScenarioGroup: scenarios[study][0].name,
    landingPage: "about",
    routes: routes,
    contentNavs: contentNavs,
    headerNavLinks: headerNavLinks,
    headerNavBrand: headerNavBrand,
    basePath: `${source}/${study}`,
    xGridValues: periods,
    maxChartWidth: 600,
    xDomainPadding: 11,
    stackbarOffset: 7,
    barWidth: 12,
    chartPadding: { left: 40, right: 20, top: 50, bottom: 35 }
  };

  config["chartsInfo"] = chartsInfo;

  return !isRepoChartsInfoLoading && <StudyPortal config={config} />;
}

export default Portal;
