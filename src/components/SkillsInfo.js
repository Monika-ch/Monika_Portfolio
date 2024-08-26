import React, { Component } from "react";
// import "../styled-components/HomePage.css";
import "../styled-components/SkillsInfo.css";

class SkillsInfo extends Component {
  render() {
    return (
      <React.Fragment>
        {/* ______SKILL HIGHLIGHTS______ */}
        <section className='skill-highlights-container container'>
          <div className='row'>
            <div className='col heading-what-I-do'>
              <h2>What I do!</h2>
            </div>
          </div>
          <div className='row skills-box'>
            {/* UX Development */}
            <div className='UX-development-box col-lg-3 container'>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-swatchbook'></i>
                </div>
                <div className='col-10'>
                  <h3 className='heading-UX-development mb-3'>
                    UX Development
                  </h3>
                  {/* <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Imperdiet erat nullam tortor quis elit lacus blandit vitae.
                    Nostra bibendum; curae magnis commodo metus vestibulum
                    tristique. Tristique volutpat consectetur congue lorem
                    pharetra habitant. Sodales gravida egestas venenatis.
                  </p> */}
                  <ul>
                    <li>
                      Extensive experience in responsive web design, mobile-first development, and progressive enhancement strategies.
                    </li>
                    <li>
                      Specialization in UI architecture principles, component-based design, and state management patterns (e.g., Redux).
                    </li>
                    <li>
                      Experience in integrating APIs, performance optimization techniques, lazy loading, code splitting, caching strategies and addressing cross-browser compatibility issues.
                    </li>
                    <li>
                      Ability to create reusable UI components and design systems to maintain consistency across applications.
                    </li>
                    <li>
                      Excellent communication skills, articulating design decisions, and collaborating effectively within agile teams.
                    </li>
                    <li>
                      Hands-on experience with CSS preprocessors like Sass or Less for scalable and maintainable stylesheets.
                    </li>
                    <li>
                      Ability to conduct usability tests, analyze user feedback, and iterate designs based on insights.
                    </li>
                    <li>
                      Collaborative approach, working closely with designers, product managers, and backend developers.
                    </li>
                    <li>
                      Enthusiasm for user research methodologies, persona development, and user journey mapping.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testing Frameworks */}
            <div className='testing-frameworks-box col-lg-3 container'>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-wrench fa-flip-horizontal'></i>
                </div>
                <div className='col-10'>
                  <h3 className='heading-testing-frameworks mb-3'>
                    Testing Frameworks
                  </h3>
                  <ul>
                    <li>
                      Proficient in enhancing automated testing frameworks, significantly boosting application performance, reliability, and scalability.
                    </li>
                    <li>
                      Skilled in integrating comprehensive automated tests into CI/CD pipelines, facilitating continuous quality assurance and efficient deployments.
                    </li>
                    <li>
                      Adept at authoring and maintaining comprehensive component-level tests for early detection and resolution of issues, significantly improving product integrity and reliability.
                    </li>
                    <li>
                      Experienced in conducting rigorous visual parity tests (VPTs) to ensure consistent and reliable user interfaces across multiple versions and environments via maintaining high service quality on every commit and deployment.
                    </li>
                    <li>
                      Capable of leveraging advanced A/B testing methodologies to flight different feature sets, reviewing detailed engagement metrics, and predict user behavior, driving data-driven feature optimizations and enhanced user satisfaction.
                    </li>
                    <li>
                      Proficient in collaborating with cross-functional teams to align testing strategies with overall development and product goals.
                    </li>
                    <li>
                      Experienced in using metrics and data analytics to refine testing strategies and improve overall test effectiveness.
                    </li>
                    <li>
                      Knowledgeable in test-driven development (TDD) and behavior-driven development (BDD) practices to enhance code quality and test coverage.
                    </li>
                    <li>
                      Skilled in conducting load and performance testing to ensure applications perform well under various conditions and scales.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accessibility */}
            <div className='accessibility-box col-lg-3 container'>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-universal-access'></i>
                </div>
                <div className='col-10'>
                  <h3 className='heading-accessibility mb-3'>Accessibility</h3>
                  {/* <ul> */}
                  {/* <li>Accessibility is at the heart of my web development approach. At Microsoft, I developed automated tests to identify and fix accessibility issues, ensuring compliance with WCAG standards. My freelance work on projects like Martian Madness involved implementing best practices for accessibility, making the web app usable for all users, including those with disabilities. In my current role at Remotasks, I refine AI-generated code to enhance accessibility features, ensuring inclusive user experiences. I'm committed to advancing my career by integrating accessibility with AI, creating digital solutions that are both intelligent and inclusive.</li> */}
                  {/* <li>Accessibility is at the heart of my web development approach.</li>
                    <li>Skilled in developing web applications adhering to WCAG guidelines, ensuring accessibility for all users.</li>
                    <li>
                      Proficient in using Web Insights for Accessibility, NVDA, and Lighthouse for comprehensive accessibility testing.</li>
                    <li>
                      Integrated automated accessibility tests into CI/CD pipelines, enabling continuous monitoring and quick resolution of accessibility issues at the component as well as application level, ensuring compliance with WCAG standards.</li>
                    <li>
                      Experienced in improvising and stabilizing automated accessibility test framework to identify issues early in the development cycle with every code commit for a bug-free feature deployment and a reliable user experience.</li>
                    <li>
                      Applied ARIA standards to enhance the accessibility of complex web components and interactive features.</li>
                    <li>
                      Conducted manual accessibility audits with screen readers like NVDA to identify and resolve issues at the component level.</li>
                    <li>
                      Enchanced image search features by accessibility, boosting user engagement by 2.6%.</li>
                  </ul> */}

                  <p>
                    Accessibility is a core focus in web development to ensure inclusive and user-friendly experiences for all users.
                  </p>

                  <p><strong>ARIA and WCAG Compliance</strong></p>
                  <ul>
                    <li>
                      Skilled in developing web applications adhering to WCAG guidelines, ensuring accessibility for users with diverse needs.</li>
                    <li>ARIA Standards: Applied ARIA standards to enhance the accessibility of complex web components and interactive features.</li>
                  </ul>

                  <p><strong>Testing and Tools</strong></p>
                  <ul>
                    <li>
                      Comprehensive Testing: Proficient in using Web Insights for Accessibility, NVDA, and Lighthouse for thorough accessibility testing.</li>
                    <li>
                      Automated Testing: Integrated automated accessibility tests into CI/CD pipelines, enabling continuous monitoring and quick resolution of accessibility issues at both component and application levels.</li>
                  </ul>

                  <p><strong>Framework</strong></p>
                  <ul>
                    <li>
                      Automated Frameworks: Experienced in improvising and stabilizing automated accessibility test frameworks to identify issues early in the development cycle, ensuring bug-free feature deployment and a reliable user experience.</li>
                  </ul>
                  <p><strong>Manual Audits</strong></p>
                  <ul>
                    <li>
                      Conducted manual accessibility audits with screen readers like NVDA to identify and resolve issues at the component level.
                    </li></ul>
                  <p><strong>Impact and Results</strong></p>
                  <ul>
                    <li>
                      Improved User Experience: Enhanced image search features by improving accessibility, which increased user engagement and generated additional traffic.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cloud Providers */}
            <div className='cloud-providers-box col-lg-3 container'>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-cloud'></i>
                </div>
                <div className='col-10'>
                  <h3 className='heading-cloud-providers mb-3'>
                    Cloud Providers
                  </h3>
                  <p>
                    Leveraging cloud technologies to drive innovation and efficiency in web application development.
                  </p>
                  <p><strong>AWS</strong></p>
                  {/* <h4>AWS</h4> */}
                  <ul>
                    <li>
                      <strong>CI/CD Automation: </strong>
                      Proficient in setting up and managing CI/CD pipelines in AWS, ensuring fast and reliable deployment and updates.</li>
                    <li>
                      <strong>Serverless Architecture: </strong>
                      Skilled in utilizing AWS Amplify for serverless backend deployment, providing scalability and cost-efficiency.</li>
                    <li>
                      <strong>Performance Optimization: </strong>
                      Applied best practices for performance optimization in AWS environments, resulting in enhanced application speed and reliability.</li>
                    <li>
                      <strong>Security Best Practices: </strong>
                      Implemented AWS security best practices to protect web applications, ensuring compliance with industry standards.
                    </li>
                  </ul>
                  <p><strong>Azure</strong></p>
                  <ul>
                    <li>
                      <strong>DevOps Integration: </strong>
                      Hands-on experience using Azure DevOps for continuous integration and deployment of applications developed in TypeScript, React, and React Native.</li>
                    <li>
                      <strong>Cloud Services: </strong>
                      Utilized Azure services to enhance web application performance and scalability, integrating with REST APIs and microservices.</li>
                    <li>
                      <strong>A/B Testing and Experimentation: </strong>
                      Conducted A/B experimentation to evaluate the best options for users through metrics, improving user engagement and application performance.</li>
                  </ul>
                  <p><strong>General Cloud Skills</strong></p>
                  <ul>
                    <li>
                      <strong>Cross-Platform Expertise: </strong>
                      Capable of working across multiple cloud platforms to leverage best-in-class services and optimize application performance and cost.</li>
                    <li>
                      <strong>Collaboration with Teams:</strong>
                      Worked closely with cross-functional teams to integrate cloud solutions, enhancing overall project efficiency and delivery.</li>
                    <li>
                      <strong>Automated Testing: </strong>
                      Integrated automated tests into CI/CD pipelines to ensure robust functionality and early detection of issues, resulting in reliable feature deployment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className='experimentation-flighting-box col-md-3'>
                  <h3 className='heading-experimentation-flighting mb-4'>
                    <span>Experimentation & Flighting</span>
                  </h3>
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Imperdiet erat nullam tortor quis elit lacus blandit vitae.
                    Nostra dapibus bibendum; curae magnis commodo metus
                    vestibulum tristique. Tristique volutpat consectetur congue
                    lorem pharetra habitant. Sodales gravida egestas venenatis
                    dignissim molestie cursus porta. Massa lacus pulvinar
                    aliquam mi tristique.
                  </p>
                </div> */}
          </div>
          <div className='row skills-box'>
            {/* UX Development */}
            <div className='UX-development-box col-lg-6 container'>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-swatchbook'></i>
                </div>
                <div className='col-10'>
                  <h3 className='heading-UX-development mb-3'>
                    UX Development
                  </h3>
                  {/* <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Imperdiet erat nullam tortor quis elit lacus blandit vitae.
                    Nostra bibendum; curae magnis commodo metus vestibulum
                    tristique. Tristique volutpat consectetur congue lorem
                    pharetra habitant. Sodales gravida egestas venenatis.
                  </p> */}
                  <ul>
                    <li>
                      Extensive knowledge of creating responsive web application using CSS3 media queries, Bootstrap. Expertise in using React.js/Redux to build User Interface, strong knowledge of state store, middleware, action creator, reducer and container.
                    </li>
                    <li>
                      Extensive experience in responsive web design, mobile-first development, and progressive enhancement strategies.
                    </li>
                    <li>
                      Specialization in UI architecture principles, component-based design, and state management patterns (e.g., Redux).
                    </li>
                    <li>
                      Experience in integrating APIs, performance optimization techniques, lazy loading, code splitting, caching strategies and addressing cross-browser compatibility issues.
                    </li>
                    <li>
                      Ability to create reusable UI components and design systems to maintain consistency across applications.
                    </li>
                    <li>
                      Excellent communication skills, articulating design decisions, and collaborating effectively within agile teams.
                    </li>
                    <li>
                      Hands-on experience with CSS preprocessors like Sass or Less for scalable and maintainable stylesheets.
                    </li>
                    <li>
                      Ability to conduct usability tests, analyze user feedback, and iterate designs based on insights.
                    </li>
                    <li>
                      Collaborative approach, working closely with designers, product managers, and backend developers.
                    </li>
                    <li>
                      Enthusiasm for user research methodologies, persona development, and user journey mapping.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testing Frameworks */}
            <div className='testing-frameworks-box col-lg-6 container'>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-wrench fa-flip-horizontal'></i>
                </div>
                <div className='col-10'>
                  <h3 className='heading-testing-frameworks mb-3'>
                    Testing Frameworks
                  </h3>
                  <ul>
                    <li>
                      Proficient in enhancing automated testing frameworks, significantly boosting application performance, reliability, and scalability.
                    </li>
                    <li>
                      Skilled in integrating comprehensive automated tests into CI/CD pipelines, facilitating continuous quality assurance and efficient deployments.
                    </li>
                    <li>
                      Adept at authoring and maintaining comprehensive component-level tests for early detection and resolution of issues, significantly improving product integrity and reliability.
                    </li>
                    <li>
                      Experienced in conducting rigorous visual parity tests (VPTs) to ensure consistent and reliable user interfaces across multiple versions and environments via maintaining high service quality on every commit and deployment.
                    </li>
                    <li>
                      Capable of leveraging advanced A/B testing methodologies to flight different feature sets, reviewing detailed engagement metrics, and predict user behavior, driving data-driven feature optimizations and enhanced user satisfaction.
                    </li>
                    <li>
                      Proficient in collaborating with cross-functional teams to align testing strategies with overall development and product goals.
                    </li>
                    <li>
                      Experienced in using metrics and data analytics to refine testing strategies and improve overall test effectiveness.
                    </li>
                    <li>
                      Knowledgeable in test-driven development (TDD) and behavior-driven development (BDD) practices to enhance code quality and test coverage.
                    </li>
                    <li>
                      Skilled in conducting load and performance testing to ensure applications perform well under various conditions and scales.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row skills-box'>
            {/* Accessibility */}
            <div className='accessibility-box col-lg-6 container'>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-universal-access'></i>
                </div>
                <div className='col-10'>
                  <h3 className='heading-accessibility mb-3'>Accessibility</h3>
                  {/* <ul> */}
                  {/* <li>Accessibility is at the heart of my web development approach. At Microsoft, I developed automated tests to identify and fix accessibility issues, ensuring compliance with WCAG standards. My freelance work on projects like Martian Madness involved implementing best practices for accessibility, making the web app usable for all users, including those with disabilities. In my current role at Remotasks, I refine AI-generated code to enhance accessibility features, ensuring inclusive user experiences. I'm committed to advancing my career by integrating accessibility with AI, creating digital solutions that are both intelligent and inclusive.</li> */}
                  {/* <li>Accessibility is at the heart of my web development approach.</li>
                    <li>Skilled in developing web applications adhering to WCAG guidelines, ensuring accessibility for all users.</li>
                    <li>
                      Proficient in using Web Insights for Accessibility, NVDA, and Lighthouse for comprehensive accessibility testing.</li>
                    <li>
                      Integrated automated accessibility tests into CI/CD pipelines, enabling continuous monitoring and quick resolution of accessibility issues at the component as well as application level, ensuring compliance with WCAG standards.</li>
                    <li>
                      Experienced in improvising and stabilizing automated accessibility test framework to identify issues early in the development cycle with every code commit for a bug-free feature deployment and a reliable user experience.</li>
                    <li>
                      Applied ARIA standards to enhance the accessibility of complex web components and interactive features.</li>
                    <li>
                      Conducted manual accessibility audits with screen readers like NVDA to identify and resolve issues at the component level.</li>
                    <li>
                      Enchanced image search features by accessibility, boosting user engagement by 2.6%.</li>
                  </ul> */}

                  <p>
                    Accessibility is a core focus in web development to ensure inclusive and user-friendly experiences for all users.
                  </p>

                  <p><strong>ARIA and WCAG Compliance</strong></p>
                  <ul>
                    <li>
                      Skilled in developing web applications adhering to WCAG guidelines, ensuring accessibility for users with diverse needs.</li>
                    <li>ARIA Standards: Applied ARIA standards to enhance the accessibility of complex web components and interactive features.</li>
                  </ul>

                  <p><strong>Testing and Tools</strong></p>
                  <ul>
                    <li>
                      Comprehensive Testing: Proficient in using Web Insights for Accessibility, NVDA, and Lighthouse for thorough accessibility testing.</li>
                    <li>
                      Automated Testing: Integrated automated accessibility tests into CI/CD pipelines, enabling continuous monitoring and quick resolution of accessibility issues at both component and application levels.</li>
                  </ul>

                  <p><strong>Framework</strong></p>
                  <ul>
                    <li>
                      Automated Frameworks: Experienced in improvising and stabilizing automated accessibility test frameworks to identify issues early in the development cycle, ensuring bug-free feature deployment and a reliable user experience.</li>
                  </ul>
                  <p><strong>Manual Audits</strong></p>
                  <ul>
                    <li>
                      Conducted manual accessibility audits with screen readers like NVDA to identify and resolve issues at the component level.
                    </li></ul>
                  <p><strong>Impact and Results</strong></p>
                  <ul>
                    <li>
                      Improved User Experience: Enhanced image search features by improving accessibility, which increased user engagement and generated additional traffic.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row skills-box'>
            {/* Cloud Providers */}
            <div className='cloud-providers-box col-lg-6 container'>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-cloud'></i>
                </div>
                <div className='col-10'>
                  <h3 className='heading-cloud-providers mb-3'>
                    Cloud Providers
                  </h3>
                  <p>
                    Leveraging cloud technologies to drive innovation and efficiency in web application development.
                  </p>
                  <p><strong>AWS</strong></p>
                  {/* <h4>AWS</h4> */}
                  <ul>
                    <li>
                      <strong>CI/CD Automation: </strong>
                      Setting up and managing CI/CD pipelines in AWS, ensuring fast and reliable deployment and updates.</li>
                    <li>
                      <strong>Serverless Architecture: </strong>
                      Utilizing AWS Amplify for serverless backend deployment, providing scalability and cost-efficiency.</li>
                    <li>
                      <strong>Performance Optimization: </strong>
                      Applied best practices for performance optimization in AWS environments, resulting in enhanced application speed and reliability.</li>
                  </ul>
                  <p><strong>Azure</strong></p>
                  <ul>
                    <li>
                      <strong>DevOps Integration: </strong>
                      Hands-on experience using Azure DevOps for continuous integration and deployment of applications developed in TypeScript, React, and React Native.</li>
                    <li>
                      <strong>Cloud Services: </strong>
                      Utilized Azure services to enhance web application performance and scalability, integrating with REST APIs and microservices.</li>
                    <li>
                      <strong>A/B Testing and Experimentation: </strong>
                      Conducted A/B experimentation to evaluate the best options for users through metrics, improving user engagement and application performance.</li>
                  </ul>
                  <p><strong>General Cloud Skills</strong></p>
                  <ul>
                    <li>
                      <strong>Cross-Platform Expertise: </strong>
                      Capable of working across multiple cloud platforms to leverage best-in-class services and optimize application performance and cost.</li>
                    <li>
                      <strong>Collaboration with Teams:</strong>
                      Worked closely with cross-functional teams to integrate cloud solutions, enhancing overall project efficiency and delivery.</li>
                    <li>
                      <strong>Automated Testing: </strong>
                      Integrated automated tests into CI/CD pipelines to ensure robust functionality and early detection of issues, resulting in reliable feature deployment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row skills-box'>
            {/* Prompting */}
            <div className='cloud-providers-box col-lg-6 container'>
              <div className='row'>
                <div className='col-2'>
                  <i className='fas fa-cloud'></i>
                </div>
                <div className='col-10'>
                  <h3 className='heading-cloud-providers mb-3'>
                    Prompting
                  </h3>
                  <p>
                    Leveraging cloud technologies to drive innovation and efficiency in web application development.
                  </p>
                  <li>
                    Advanced expertise in optimizing AI models like ChatGPT by ranking and annotating code responses, leading to significant improvements in model performance.
                  </li>
                  <li>
                    Extensive experience in evaluating the code generation capabilities of Large Language Models (LLMs), ensuring accuracy, completeness, and explainability.
                  </li>
                  <li>
                    Proficient in authoring and refining algorithmic solutions, enhancing the AI's ability to respond to complex prompts with high precision.
                  </li>
                  <li>
                    Specialized in critical analysis and debugging of AI-generated code, maintaining the highest standards of performance and reliability.
                  </li>
                  <li>
                    Collaborative team player, contributing to AI training and development by driving innovation and setting new benchmarks in the field.
                  </li>
                  <li>
                    Hands-on experience with a variety of programming languages and tools, including JavaScript, TypeScript, Python, React, and Node.js, to support robust AI training workflows.
                  </li>
                  <li>
                    Proven track record of contributing to key project milestones, advancing AI capabilities in real-world applications.
                  </li>
                  <li>
                    Expertise in integrating AI-driven solutions with existing technologies, optimizing workflows and enhancing overall productivity.
                  </li>
                  <li>
                    Ability to articulate complex technical concepts, facilitating effective collaboration within cross-functional teams.
                  </li>
                  <li>
                    Enthusiastic about leveraging AI to solve challenging problems, continuously improving models to meet evolving industry needs.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </section >
      </React.Fragment >
    );
  }
}

export default SkillsInfo;
