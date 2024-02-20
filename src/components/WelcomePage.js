import React, { Component } from "react";
import Header from "./Header";
import SkillsInfo from "./SkillsInfo";
import "../styled-components/WelcomePage.css";

class WelcomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='welcome-page-container'>
          <Header />
          <div className='welcome-page'>
            <div className='welcome-section'>
              <h1>
                Hi, I'm <span className='styleH1'> Monika</span>!
              </h1>
              <section className='intro-content-container'>
                <div className='image-container'>
                  <div className='portfolio-image'></div>
                  {/* <!-- <img className="portfolio-image" src="me1.jpg" alt=""> --> */}
                </div>

                {/* ______INTRODUCTION______ */}
                <div className='intro-container'>
                  <p>
                    I'm a self-coached web developer with more than three years
                    of coding experience and fourteen months of industry
                    experience. I'm willing to take on new challenges with
                    proven ability to adapt in both self-starting and
                    collaborative environments. I have passion for staying
                    focused on achieving high-quality results and delivering
                    delightful customer experiences.
                  </p>
                  <p>
                    I'm expanding my learning by working on small personal
                    projects and gaining enterprise experience and building upon
                    my developer skills by working as a contract web developer
                    for Microsoft.
                  </p>
                  {/* I’m a self-taught web developer with over three years of coding
                and industry experience. I enjoy tackling new challenges and
                working in diverse teams. I always aim to deliver high-quality
                and customer-centric solutions. I’m constantly learning new
                skills and technologies, both through personal projects and as a
                contract web developer for Microsoft. */}
                  {/* Hi, I’m Jane Smith, a web developer who creates stunning
                websites and apps. I have over 5 years of experience in building
                websites for various industries, such as e-commerce, education,
                and entertainment. I love to learn new skills and technologies,
                and I always strive to deliver high-quality and innovative
                solutions for my clients. Whether you need a simple landing
                page, a complex web application, or anything in between, I can
                help you achieve your goals. Check out my work below, get in
                touch with me, or let’s work together on your next project. */}
                </div>
              </section>
            </div>

            {/* ______SKILL HIGHLIGHTS______ */}
            <SkillsInfo />

            {/* ______INFORMATION______ */}
            <section className='info-container'>
              <div className='projects-container'>
                <div>
                  <h3 className='headingProjects'>
                    <span>Explore </span>
                  </h3>
                </div>
              </div>
              <div className='skills-container'>
                <div>
                  <h3 className='headingSkills'>
                    <span>Know </span>
                  </h3>
                </div>
              </div>
              <div className='profile-container'>
                <div>
                  <h3 className='headingProfile'>
                    <span>Look up </span>
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WelcomePage;
