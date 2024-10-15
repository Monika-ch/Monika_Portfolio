import React from "react";
import { git, vsCode, figma, lighthouse, nvda, accessibilityInsightsForWeb, reactDevTools, chromeDevTools, awsAmplify, azureDevOps } from '../constants/variables';

const SkillTools = () => {
  return (
    <div id="skill-tools" className="SkillTools">
      <h3>Tools</h3>
      <div className="skill-tools-text-wrapper">
        {git}
        {vsCode}
        {figma}
        {lighthouse}
        {nvda}
        {accessibilityInsightsForWeb}
        {reactDevTools}
        {chromeDevTools}
        {awsAmplify}
        {azureDevOps}
      </div>
      <hr />
    </div>
  )
}
export default SkillTools;
