
import React from 'react';
import PatternMatch1 from './PatternMatch1';
import '../styled-components/Home.css';
import '../styled-components/ContentContainer.css';
import '../styled-components/Content.css';

const MyStory = () => {
  return (
    <section id="story" className='story-section'>
      {/* ______INTRODUCTION______ */}
      <div className='story-container'>
        <div className='about-me'>
          <h2>
            Hi, I'm <span className='styleH1'> Monika</span> ..
          </h2>
          <p className='p1'>I'm a web developer with a passion for turning creative ideas into seamless web experiences. My journey began four years ago in a bootcamp, which led to impactful work with Bing@Work Microsoft. There, I enhanced Bing's enterprise search features, improved accessibility testing frameworks, and developed image search functionalities.</p>

          {/* <p className='p2'>In my freelance ventures, I created, launched and hosted projects from scratch, like Martian Madness—a responsive web app that attracted over 700 users within a month through NFT minting.</p> */}

          <p className='p2'>I created, launched and hosted projects from scratch in my freelance ventures, like Martian Madness, an NFT minting platform for a digital artist that attracted several users within a month.</p>

          <p className='p3'>Following today's trend, I work with large language models like GPT as a Prompt Engineer at Remotasks. I focus on prompting, evaluating, and debugging code generation to enhance their precision and relevance.</p>
        </div>
        <div className='future-goals'>
          <h3>Future Goals</h3>
          <p>Looking ahead, I'm eager to continue in AI-powered roles that align with my interests. I enjoy learning new skills and technologies to continue deliver high-quality, innovative solutions to my clients.</p>
          <p>Whether you need a simple landing page or a complex web application, I can help you achieve your goals. Check out my work and get in touch. Let’s collaborate on your next project.</p>
        </div>
      </div>
      <PatternMatch1 />
    </section>
  )
}

export default MyStory;
