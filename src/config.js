import commonChartsInfo from "./specs/chartsInfo";
import chartsTitles from "./specs/chartsTitles";
import seriesTitles from "./specs/seriesTitles";
import scenarioTitles from "./specs/scenarioTitles";
import scenarios from "./specs/scenarios";
import routes from "./specs/routes";
import contentNavs from "./specs/contentNavs";
import useFetch from "energy-charts/dist/hooks/useFetch";

const chartsPath = "results/*";

const studies = [
  "tim-carbon-budgets-2021",
  "tim-energy-security-2022",
  "tim-carbon-budgets-2022"
];

const headerNavLinks = [{ to: "results", text: "Results" }];

const headerNavBrand = { brand: "Energy Scenarios", to: "/" };

const orgGhPages = "https://MaREI-EPMG.github.io";

const periods = Array.from(Array(31), (e, i) => 2020 + i);

let cache = {};

const alert = {
  heading: "Work in progress...",
  text: "Please don't cite or use these results.",
  variant: "danger"
};

function ChartsInfo() {
  const chartsInfo = useFetch(
    `${orgGhPages}/tim-carbon-budgets-2022/specs/charts.json`,
    cache
  );

  return chartsInfo;
}

const chartsInfo = {
  "tim-carbon-budgets-2021": commonChartsInfo,
  "tim-energy-security-2022": commonChartsInfo,
  "tim-carbon-budgets-2022": ChartsInfo
};

let config = {};

studies.forEach(
  (study) =>
    (config[study] = {
      alert: alert,
      chartsInfo: chartsInfo[study],
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
      basePath: `${orgGhPages}/${study}`,
      xGridValues: periods,
      maxChartWidth: 600,
      xDomainPadding: 11,
      stackbarOffset: 7,
      barWidth: 12,
      chartPadding: { left: 40, right: 20, top: 50, bottom: 35 }
    })
);

export { config as default };
