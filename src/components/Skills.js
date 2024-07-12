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
                <p>Extensive knowledge of creating responsive web application using CSS3 media queries, Bootstrap. Expertise in using React.js/Redux to build User Interface, strong knowledge of state store, middleware, action creator, reducer and container.</p>
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
                <p>Proficient in integrating comprehensive automated tests into CI/CD pipelines, facilitating continuous quality assurance and efficient deployments enhancing automated testing frameworks, significantly boosting application performance, reliability, scalability.</p>
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
                <p>Extensive knowledge of creating responsive web application using CSS3 media queries, Bootstrap. Expertise in using React.js/Redux to build User Interface, strong knowledge of state store, middleware, action creator, reducer and container.</p>
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
                <p>Proficient in integrating comprehensive automated tests into CI/CD pipelines, facilitating continuous quality assurance and efficient deployments enhancing automated testing frameworks, significantly boosting application performance, reliability, scalability.</p>
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
                <p>Extensive knowledge of creating responsive web application using CSS3 media queries, Bootstrap. Expertise in using React.js/Redux to build User Interface, strong knowledge of state store, middleware, action creator, reducer and container.</p>
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
                <p>Proficient in integrating comprehensive automated tests into CI/CD pipelines, facilitating continuous quality assurance and efficient deployments enhancing automated testing frameworks, significantly boosting application performance, reliability, scalability.</p>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Skills;
