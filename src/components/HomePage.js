import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import SkillsInfo from './SkillsInfo';
import KnowSkills from './KnowSkills';  // Example page for "Know Skills"
import ExploreProjects from './ExploreProjects'; // Example page for "Explore"
import LookUpProfile from './LookUpProfile'; // Example page for "Look Up"
// import '../styled-components/HomePage.css';

const HomePage = () => {
  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(true);
  // };

  return (
    <section className='home-page-container'>
      {/* <NavigationBar /> */}

      <div className='home-page'>
        <section id="story" className='story-section'>
          <h1>
            Hi, I'm <span className='styleH1'> Monika</span> ..
          </h1>
          <div className='intro-content-container'>
            <div className='image-container'>
              <div className='portfolio-image'></div>
            </div>
            {/* ______INTRODUCTION______ */}
            <div className='intro-container'>
              <p>I'm a web developer who loves transforming creative ideas into seamless web experiences. My tech journey started around four years ago when I joined a bootcamp to learn web development, and I've had the pleasure of working with amazing teams like Bing@Work Microsoft. There, I built and deployed shared controls for improved Bing enterprise search features and enhanced performances, helped improvise automated accessibility testing framework and develop features for Image search vertical.</p>

              <p>In my freelancing adventures, I designed, created and hosted projects from blank slates like Martian Madness—a responsive web app that attracted over 700 users within a month by minting NFTs.</p>

              <p>Now, I'm immersed in the world of AI at Remotasks as a Prompt Engineer. I spend my days prompting, evaluating and debugging code generation capabilities of large language models like GPT, performing critical analysis and helping them become more precise and deliver relevant information.</p>

              <p>As I look ahead, I'm excited to shape my career especially around AI-powered roles that align with my profile and interests. I also love to learn new skills and technologies, and I always strive to deliver high-quality customer-centric and innovative solutions for my clients. Whether you need a simple landing page, a complex web application, or anything in between, I can help you achieve your goals. Check out my work below, get in touch with me, or let’s work together on your next project.</p>
            </div>
          </div>
        </section>

        {/* ______SKILL HIGHLIGHTS______ */}
        <section id="skills">
          <SkillsInfo />
        </section>

        {/* ______INFORMATION______ */}
        {/* Navigation Links */}
        <section id="info" className='info-container'>
          <div className='projects-container'>
            <h3>
              <Link to='/projects' className='headingProjects'>
                <span>Explore </span>
              </Link>
            </h3>
          </div>

          <div className='skills-container'>
            <div><h3>
              <Link to="/skills"
                className='headingSkills'>
                <span>Know </span>
              </Link></h3>
            </div>
          </div>

          <div className='profile-container'><div><h3>
            <Link to='/profile' className='headingProfile'>
              <span>Look up</span>
            </Link>
          </h3>
          </div>
          </div>
        </section>
      </div>
    </section>
  );
};

// class HomePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicked: false
//     };
//     handleClick = () => {
//       this.setState({
//         clicked: true
//       });
//     };
//   }
//   render() {
//     if (this.state.clicked) {
//       return <KnowSkills />;
//     }
//     return (
//       <React.Fragment>
//         <section className='home-page-container'>

//           <NavigationBar />

//           <div className='home-page'>
//             <div className='story-section'>
//               {/* <h1>
//                 Hi, I'm <span className='styleH1'> Monika</span> ..
//               </h1> */}
//               <h1>
//                 Hi, I'm <span className='styleH1'> Monika</span> ..
//               </h1>
//               <section className='intro-content-container'>
//                 <div className='image-container'>
//                   <div className='portfolio-image'></div>
//                   {/* <!-- <img className="portfolio-image" src="me1.jpg" alt=""> --> */}
//                 </div>

//                 {/* ______INTRODUCTION______ */}
//                 <div className='intro-container'>
//                   <p>I'm a web developer who loves transforming creative ideas into seamless web experiences. My tech journey started around four years ago when I joined a bootcamp to learn web development, and I've had the pleasure of working with amazing teams like Bing@Work Microsoft. There, I built and deployed shared controls for improved Bing enterprise search features and enhanced performances, helped improvise automated accessibility testing framework and develop features for Image search vertical.
//                   </p>

//                   <p>In my freelancing adventures, I designed, created and hosted projects from blank slates like Martian Madness—a responsive web app that attracted over 700 users within a month by minting NFTs.
//                   </p>

//                   <p>
//                     Now, I'm immersed in the world of AI at Remotasks as a Prompt Engineer. I spend my days prompting, evaluating and debugging code generation capabilities of large language models like GPT, performing critical analysis and helping them become more precise and deliver relevant information.
//                   </p>

//                   <p>As I look ahead, I'm excited to shape my career especially around AI-powered roles that align with my profile and interests. I also love to learn new skills and technologies, and I always strive to deliver high-quality customer-centric and innovative solutions for my clients. Whether you need a simple landing page, a complex web application, or anything in between, I can help you achieve your goals. Check out my work below, get in touch with me, or let’s work together on your next project.</p>
//                 </div>
//               </section>
//             </div>

//             {/* ______SKILL HIGHLIGHTS______ */}
//             <SkillsInfo />
//             <KnowSkills />

//             {/* ______INFORMATION______ */}
//             <section className='info-container'>
//               <div className='projects-container'>
//                 <div>
//                   <h3 className='headingProjects'>
//                     <span>Explore </span>
//                   </h3>
//                 </div>
//               </div>
//               <div className='skills-container onClick={this.handleClick}'>
//                 <div>
//                   <h3 className='headingSkills'>
//                     <span>Know </span>
//                   </h3>
//                 </div>
//               </div>
//               <div className='profile-container'>
//                 <div>
//                   <h3 className='headingProfile'>
//                     <span>Look up </span>
//                   </h3>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </section>
//       </React.Fragment>
//     );
//   }
// }

export default HomePage;
