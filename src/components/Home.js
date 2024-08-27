import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HomeProfile from './HomeProfile';
import MyStory from './MyStory';
import WhatIDo from './WhatIDo';
import ContactPage from './ContactPage';
import Footer from './Footer';
import '../styled-components/Home.css';
import '../styled-components/ContentContainer.css';
import '../styled-components/MyStory.css';

const Home = () => {
  return (
    <div className='Home-page container'>
      <div className='row'>
        <NavigationBar />
        <div className='col-lg-7 order-lg-1 order-2'>
          <div id='ContentContainer' className='Content-container'>
            <main>
              <Routes>
                <Route path='/' element={<MyStory />} />
                <Route path='/Monika_Portfolio' element={<MyStory />} />
                <Route path='/whatIdo' element={<WhatIDo />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" />} />
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
