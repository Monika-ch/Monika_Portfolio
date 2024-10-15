import React from "react";
import { code, test, debug, ABTesting, accessibility, prompting, productDevelopment, cicdAutomation, scrum, AI, LLM } from '../constants/variables';

const SkillSkills = () => {
  return (
    <div id="skill-skills" className="SkillSkills">
      <h3>Skills</h3>
      <div className="skill-skills-text-wrapper">
        {code}
        {test}
        {debug}
        {ABTesting}
        {accessibility}
        {prompting}
        {productDevelopment}
        {cicdAutomation}
        {scrum}
        {AI}
        {LLM}
      </div>
      <hr />
    </div>
  )
}
export default SkillSkills;
