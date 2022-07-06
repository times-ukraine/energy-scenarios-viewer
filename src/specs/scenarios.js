const scenarios = {
  "tim-energy-security-2022": [
    {
      name: "mitigation_a33e61_1_halfled-hire",
      variants: [{ name: "mitigation_a33e61_1_halfled-hire", specs: null }]
    },
    {
      name: "mitigation_cap21_a33e61_1",
      variants: [{ name: "mitigation_cap21_a33e61_1", specs: null }]
    },
    {
      name: "mitigation_cap21_a33e61_1_hiprice",
      variants: [{ name: "mitigation_cap21_a33e61_1_hiprice", specs: null }]
    },
    {
      name: "mitigation_cap21_a33e61_1_hiprice_led",
      variants: [{ name: "mitigation_cap21_a33e61_1_hiprice_led", specs: null }]
    },
    {
      name: "mitigation_cap21_a33e61_1_vhing_hire_halfled",
      variants: [
        { name: "mitigation_cap21_a33e61_1_vhing_hire_halfled", specs: null }
      ]
    },
    {
      name: "mitigation_cap21_a33e61_1-halfled",
      variants: [{ name: "mitigation_cap21_a33e61_1-halfled", specs: null }]
    },
    {
      name: "mitigation_cap21_a33e61_1-halfled-hire-hiprice",
      variants: [
        {
          name: "mitigation_cap21_a33e61_1-halfled-hire-hiprice",
          specs: null
        }
      ]
    },
    {
      name: "mitigation_cap21_a33e61_1-hiprice",
      variants: [{ name: "mitigation_cap21_a33e61_1-hiprice", specs: null }]
    },
    {
      name: "mitigation_cap21_a33e61_1-hiprice-halfled",
      variants: [
        { name: "mitigation_cap21_a33e61_1-hiprice-halfled", specs: null }
      ]
    },
    {
      name: "mitigation_cap21_a33e61_1-hire",
      variants: [{ name: "mitigation_cap21_a33e61_1-hire", specs: null }]
    },
    {
      name: "mitigation_cap21_a33e61_1-hire-hiprice",
      variants: [
        { name: "mitigation_cap21_a33e61_1-hire-hiprice", specs: null }
      ]
    },
    {
      name: "no_mitigation",
      variants: [{ name: "no_mitigation", specs: null }]
    },
    {
      name: "no_mitigation_1_hiprice",
      variants: [{ name: "no_mitigation_1_hiprice", specs: null }]
    }
  ],
  "tim-carbon-budgets-2021": [
    {
      name: "Mitigation_CAP21_A51E51",
      variants: [{ name: "Mitigation_CAP21_A51E51", "specs": null }]
    },
    {
      name: "Mitigation_CAP21_A51E51-BioImp",
      variants: [{ name: "Mitigation_CAP21_A51E51-BioImp", "specs": null }]
    },
    {
      name: "Mitigation_CAP21_A51E51-H2Imp",
      variants: [{ name: "Mitigation_CAP21_A51E51-H2Imp", "specs": null }]
    },
    {
      name: "Mitigation_CAP21_A51E51-highREN",
      variants: [{ name: "Mitigation_CAP21_A51E51-highREN", "specs": null }]
    },
    {
      name: "Mitigation_CAP21_A51E51-lowBio",
      variants: [{ name: "Mitigation_CAP21_A51E51-lowBio", "specs": null }]
    },
    {
      name: "Mitigation_CAP21_A51E51-techOptimism",
      variants: [
        { name: "Mitigation_CAP21_A51E51-techOptimism", "specs": null }
      ]
    },
    {
      name: "Mitigation_CAP21_A51E51-EA",
      variants: [{ name: "Mitigation_CAP21_A51E51-EA", "specs": null }]
    },
    {
      name: "Mitigation_CAP21_A51E51-LA",
      variants: [{ name: "Mitigation_CAP21_A51E51-LA", "specs": null }]
    },
    {
      name: "Mitigation_CAP21_A51E51-LED",
      variants: [{ name: "Mitigation_CAP21_A51E51-LED", "specs": null }]
    },
    {
      name: "Mitigation_CAP21_A51E51-LED-techOptimism",
      variants: [
        { name: "Mitigation_CAP21_A51E51-LED-techOptimism", "specs": null }
      ]
    },
    {
      name: "Mitigation_WAM",
      variants: [{ name: "Mitigation_WAM", "specs": null }]
    },
    {
      name: "No_Mitigation",
      variants: [{ name: "No_Mitigation", "specs": null }]
    }
  ],
  "tim-carbon-budgets-2022": [
    {
      name: "No_Mitigation",
      variants: [{ name: "No_Mitigation", specs: null }]
    },
    {
      name: "Mitigation_Baseline",
      variants: [{ name: "Mitigation_Baseline", specs: null }]
    },
    {
      name: "Mitigation_Electrification",
      variants: [{ name: "Mitigation_Electrification", specs: null }]
    },
    {
      name: "Mitigation_SectoralCBs",
      variants: [{ name: "Mitigation_SectoralCBs", specs: null }]
    },
    {
      name: "Mitigation_ReducedSectoralCBs",
      variants: [{ name: "Mitigation_ReducedSectoralCBs", specs: null }]
    },
    {
      name: "Mitigation_CarbonBudget",
      variants: [{ name: "Mitigation_CarbonBudget", specs: null }]
    },
    {
      name: "Mitigation_ReducedCarbonBudget",
      variants: [{ name: "Mitigation_ReducedCarbonBudget", specs: null }]
    },
    {
      name: "Mitigation_SectoralCBs-TechOptimism",
      variants: [{ name: "Mitigation_SectoralCBs-TechOptimism", specs: null }]
    },
    {
      name: "Mitigation_ReducedSectoralCBs-TechOptimism",
      variants: [
        { name: "Mitigation_ReducedSectoralCBs-TechOptimism", specs: null }
      ]
    },
    {
      name: "Mitigation_CarbonBudget-TechOptimism",
      variants: [{ name: "Mitigation_CarbonBudget-TechOptimism", specs: null }]
    },
    {
      name: "Mitigation_ReducedCarbonBudget-TechOptimism",
      variants: [
        { name: "Mitigation_ReducedCarbonBudget-TechOptimism", specs: null }
      ]
    },
    {
      name: "Mitigation_SectoralCBs-LED_Halfway",
      variants: [{ name: "Mitigation_SectoralCBs-LED_Halfway", specs: null }]
    },
    {
      name: "Mitigation_ReducedSectoralCBs-LED_Halfway",
      variants: [
        { name: "Mitigation_ReducedSectoralCBs-LED_Halfway", specs: null }
      ]
    },
    {
      name: "Mitigation_CarbonBudget-LED_Halfway",
      variants: [{ name: "Mitigation_CarbonBudget-LED_Halfway", specs: null }]
    },
    {
      name: "Mitigation_ReducedCarbonBudget-LED_Halfway",
      variants: [
        { name: "Mitigation_ReducedCarbonBudget-LED_Halfway", specs: null }
      ]
    },
    {
      name: "Mitigation_SectoralCBs-LED_Halfway-TechOptimism",
      variants: [
        {
          name: "Mitigation_SectoralCBs-LED_Halfway-TechOptimism",
          specs: null
        }
      ]
    },
    {
      name: "Mitigation_ReducedSectoralCBs-LED_Halfway-TechOptimism",
      variants: [
        {
          name: "Mitigation_ReducedSectoralCBs-LED_Halfway-TechOptimism",
          specs: null
        }
      ]
    },
    {
      name: "Mitigation_CarbonBudget-LED_Halfway-TechOptimism",
      variants: [
        {
          name: "Mitigation_CarbonBudget-LED_Halfway-TechOptimism",
          specs: null
        }
      ]
    },
    {
      name: "Mitigation_ReducedCarbonBudget-LED_Halfway-TechOptimism",
      variants: [
        {
          name: "Mitigation_ReducedCarbonBudget-LED_Halfway-TechOptimism",
          specs: null
        }
      ]
    }
  ]
};

export default scenarios;
