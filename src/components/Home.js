import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HomeProfile from './HomeProfile';
import MyStory from './MyStory';
import WhatIDo from './WhatIDo';
import Contact from './Contact';
import Footer from './Footer';
import '../styled-components/Home.css';
import '../styled-components/ContentContainer.css';
import '../styled-components/Content.css';

const Home = () => {
  return (
    <div className='Home-page container'>
      <div className='row'>
        <div className='col-'></div>
        <NavigationBar />
        <div className='col-lg-7 order-lg-1 order-2'>
          <div id='ContentContainer' className='Content-container'>
            <main>
              <Routes>
                <Route path='/' element={<MyStory />} />
                <Route path='/Portfolio' element={<MyStory />} />
                <Route path='/whatIdo' element={<WhatIDo />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
        <HomeProfile />
      </div>
    </div>
  )
}

export default Home;
