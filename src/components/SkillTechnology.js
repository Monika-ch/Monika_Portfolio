import React from "react";
import { javaScript, react, typeScript, python, bootstrap, html, css, dom, json, nodeJS, restAPI, aws, azure, JQuery, cSharp } from '../constants/variables';

const SkillTechnology = () => {
  return (
    <div id="skill-technology" className="SkillTechnology">
      <h3>Technology</h3>
      <div className="skill-technology-text-wrapper">
        {javaScript}
        {react}
        {typeScript}
        {python}
        {bootstrap}
        {html}
        {css}
        {dom}
        {json}
        {nodeJS}
        {restAPI}
        {azure}
        {aws}
        {JQuery}
        {cSharp}
      </div>
      <hr />
    </div>
  )
}
export default SkillTechnology;
