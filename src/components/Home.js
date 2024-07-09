// export default function Home() {
//   return <h1>Home</h1>
// }

// import React from "react";
// function Home() { return <h1>Home</h1> }
// export default Home;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import SkillsInfo from './SkillsInfo';
import KnowSkills from './KnowSkills';  // Example page for "Know Skills"
import ExploreProjects from './ExploreProjects'; // Example page for "Explore"
import LookUpProfile from './LookUpProfile'; // Example page for "Look Up"
import '../styled-components/Home.css';
import '../styled-components/ContentContainer.css';
import '../styled-components/Content.css';
import HomeProfile from './HomeProfile';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='Home-page container'>
      <div className='row'>
        <div className='col-lg-7'>
          <div id='ContentContainer' className='Content-container'>

            <main>
            <NavigationBar />
              <section id="story" className='story-section'>
                <h2>
                  Hi, I'm <span className='styleH1'> Monika</span> ..
                </h2>
                {/* <div className='intro-content-container'> */}
                {/* ______INTRODUCTION______ */}
                <div className='story-container'>
                  <p className='p1'>I'm a web developer with a passion for turning creative ideas into seamless web experiences. My journey began four years ago in a bootcamp, which led to impactful work with Bing@Work Microsoft. There, I enhanced Bing's enterprise search features, improved accessibility testing frameworks, and developed image search functionalities.</p>

                  <p className='p2'>In my freelance ventures, I created and launched projects from scratch, like Martian Madness—a responsive web app that attracted over 700 users within a month through NFT minting.</p>

                  <p className='p3'>Now, I'm immersed in the world of AI. As a Prompt Engineer at Remotasks, I work with large language models like GPT. I focus on prompting, evaluating, and debugging code generation to enhance their precision and relevance.</p>

                  <h3>Future Goals</h3>

                  <p className='p4'>Looking ahead, I'm eager to continue in AI-powered roles that align with my interests. I enjoy learning new skills and technologies to continue deliver high-quality, innovative solutions to my clients. Whether you need a simple landing page or a complex web application, I can help you achieve your goals. Check out my work below, get in touch, and let’s collaborate on your next project.</p>
                </div>
                {/* </div> */}
              </section>
            </main>
            <Footer />
          </div>
        </div>
        <HomeProfile />
      </div>
    </div>
  )
}

export default Home;
