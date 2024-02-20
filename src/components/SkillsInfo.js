import React, { Component } from "react";
import "../styled-components/WelcomePage.css";

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
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Imperdiet erat nullam tortor quis elit lacus blandit vitae.
                    Nostra bibendum; curae magnis commodo metus vestibulum
                    tristique. Tristique volutpat consectetur congue lorem
                    pharetra habitant. Sodales gravida egestas venenatis.
                  </p>
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
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Imperdiet erat nullam tortor quis elit lacus blandit vitae.
                    Nostra bibendum; curae magnis commodo metus vestibulum
                    tristique. Tristique volutpat consectetur congue lorem
                    pharetra habitant. Sodales gravida egestas venenatis.
                  </p>
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
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Imperdiet erat nullam tortor quis elit lacus blandit vitae.
                    Nostra bibendum; curae magnis commodo metus vestibulum
                    tristique. Tristique volutpat consectetur congue lorem
                    pharetra habitant. Sodales gravida egestas venenatis.
                  </p>
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
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Imperdiet erat nullam tortor quis elit lacus blandit vitae.
                    Nostra bibendum; curae magnis commodo metus vestibulum
                    tristique. Tristique volutpat consectetur congue lorem
                    pharetra habitant. Sodales gravida egestas venenatis.
                  </p>
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
        </section>
      </React.Fragment>
    );
  }
}

export default SkillsInfo;
