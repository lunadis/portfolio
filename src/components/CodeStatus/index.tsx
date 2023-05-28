"use client";

import CodersRankActivity from "@codersrank/activity";
import CodersRankSkillsChart from "@codersrank/skills-chart";

import React, { useEffect } from "react";
import { props } from "./CodeStatus.types";

const CodeStatus = ({ username }: props) => {
  useEffect(() => {
    window.customElements.define("codersrank-activity", CodersRankActivity);
    function onData(event: any) {
      const total = event.detail.total;
      console.log(`${total} activities in the last year`);
    }
    window.customElements.define(
      "codersrank-skills-chart",
      CodersRankSkillsChart
    );

    document.querySelector("#activity")?.addEventListener("data", onData);
  }, []);

  return <></>;
};

export { CodeStatus };
