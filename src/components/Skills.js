import React, { Component } from "react";
import "../styled-components/Skills.css";

class Skills extends Component {
  render() {
    return (
      <section id="skills" className='skills-container container'>
        <div className="skills-cards-row row">
          <div className='skills-card skills-card-left col-lg-6 container'>
            <div className='row'>
              <div className='col-2'>
                <i className='far fa-swatchbook'></i>
              </div>
              <div className='col-10'>
                <h3 className='heading-UX-dev mb-3'>
                  UX development
                </h3>
                <p>Extensive knowledge of creating responsive web application using CSS3 media queries, Bootstrap. Expertise in using React.js/Redux to build User Interface, strong knowledge of state store, middleware, action creator, reducer and container and API integration.</p>
              </div>
            </div>
          </div>
          <div className='skills-card skills-card-right col-lg-6 container'>
            <div className='row'>
              <div className='col-2'>
                <i className='far fa-wrench fa-flip-horizontal'></i>
              </div>
              <div className='col-10'>
                <h3 className='heading-testing-frameworks mb-3'>
                  Testing Frameworks
                </h3>
                <p>Proficient in A/B testing methodologies and integrating comprehensive automated tests into CI/CD pipelines, facilitating continuous quality assurance and efficient deployments enhancing automated testing frameworks, significantly boosting application performance, reliability, scalability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-cards-row row">
          <div className='skills-card skills-card-left col-lg-6 container'>
            <div className='row'>
              <div className='col-2'>
                <i className='far fa-universal-access'></i>
              </div>
              <div className='col-10'>
                <h3 className='heading-accessibility mb-3'>
                  Accessibility
                </h3>
                <p>Experienced in implementing WCAG compliance and ARIA standards for accessible web applications, with proficiency in using tools like NVDA and Lighthouse. Skilled in integrating automated accessibility tests and conducting manual audits to enhance user experience.</p>
              </div>
            </div>
          </div>
          <div className='skills-card skills-card-right col-lg-6 container'>
            <div className='row'>
              <div className='col-2'>
                <i className='far fa-cloud'></i>
              </div>
              <div className='col-10'>
                <h3 className='heading-cloud-providers mb-3'>
                  Cloud Providers
                </h3>
                <p>Leveraged cloud technologies for web application efficiency and scalability using AWS CI/CD automation, serverless architecture with Amplify, and Azure DevOps integration. Applied cross-platform cloud solutions, performance optimization and A/B testing to ensure reliable deployment.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-cards-row row">
          <div className='skills-card skills-card-left col-lg-6 container'>
            <div className='row'>
              <div className='col-2'>
                {/* <i className='fas fa-swatchbook'></i> */}
                <i className="far fa-robot"></i>
              </div>
              <div className='col-10'>
                <h3 className='heading-accessibility mb-3'>
                  Prompting
                </h3>
                <p>Adept in optimizing AI models like ChatGPT by refining code responses, and debugging AI outputs. Skilled in assessing LLMs responses, developing algorithmic solutions, and improving code generation accuracy, security, and effectiveness to complex prompts, driving applications of AI advancements in real-world scenarios.</p>
              </div>
            </div>
          </div>
          <div className='skills-card skills-card-right col-lg-6 container'>
            <div className='row'>
              <div className='col-2'>
                <i className="far fa-wand-magic"></i>
              </div>
              <div className='col-10'>
                <h3 className='heading-cloud-providers mb-3'>
                  Interests
                </h3>
                <p>Passionate about exploring the world. I find joy in swimming, hiking, Bollywood dance workouts, and savoring new vegetarian cuisines. Recently, I’ve added learning the keyboard/piano to my diverse list of hobbies. If any of your interests matches with mine, we can chat to find out more about each other.</p>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Skills;
