import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HomeProfile from './HomeProfile';
import SkillTechnology from './SkillTechnology';
import SkillTools from './SkillTools';
import SkillSkills from './SkillSkills';
import MyStory from './MyStory';
import WhatIDo from './WhatIDo';
import ContactPage from './ContactPage';
import Footer from './Footer';
import '../styled-components/Home.css';
import '../styled-components/ContentContainer.css';
import '../styled-components/SkillColumn.css';
import '../styled-components/MyStory.css';


const Home = () => {
  return (
    <>
      {/* for larger screen size i.e. min-width: 992px   */}
      <div className='Home-page container d-none d-lg-block' >
        <div className='row'>
          <div className='col-lg-7 col-xl-6 order-2 order-lg-1'>
            <NavigationBar />
            <div id='ContentContainer' className='Content-container'>
              <main>
                <Routes>
                  <Route path='/Monika_Portfolio' element={<MyStory />} />
                  <Route path='/myStory' element={<MyStory />} />
                  <Route path='/' element={<MyStory />} />
                  <Route path='/whatIdo' element={<WhatIDo />} />
                  <Route path='/contact' element={<ContactPage />} />
                  <Route path="*" element={<Navigate to="/Monika_Portfolio" />} />
                </Routes>
              </main>
              <footer>
                <Footer />
              </footer>
            </div>
          </div>

          <div className='col-lg-5 order-lg-2 order-1'>
            <HomeProfile />
            <div id='skill-column'>
              <SkillTechnology />
              <SkillTools />
              <SkillSkills />
            </div>
          </div>
        </div>
      </div>

      {/* for small/medium screen size i.e. max-width: 991px   */}
      <div className='Home-page container d-lg-none' >
        <div className='row'>
          <div className='col'>
            <NavigationBar />
            <div id='ContentContainer' className='Content-container'>
              <main>
                <Routes>
                  <Route path='/' element={
                    <div>
                      <HomeProfile />
                      <MyStory />
                      <div id='skill-column'>
                        <SkillTechnology />
                        <SkillTools />
                        <SkillSkills />
                      </div>
                    </div>
                  } />
                  <Route path='/whatIdo' element={<WhatIDo />} />
                  <Route path='/contact' element={<ContactPage />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
            </div>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home;
