import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import SkillsInfo from './SkillsInfo';
import KnowSkills from './KnowSkills';  // Example page for "Know Skills"
import ExploreProjects from './ExploreProjects'; // Example page for "Explore"
import LookUpProfile from './LookUpProfile'; // Example page for "Look Up"
import '../styled-components/Home.css';
import '../styled-components/DownloadResumeButtonProfile.css';

const HomeProfile = () => {
  const url =
    "https://monikaresume.blob.core.windows.net/monika-resume/ResumeNew.pdf";

  return (
    <div id='HomeProfile' className='Home-profile-container col-lg-5'>
      <div className='profile-container'>
        <div className='profile-thumbnail'>
          <img src={process.env.PUBLIC_URL + '/me.jpg'} alt="Profile Photo" className="profile-photo" />
          <h1 className='mt-2'>Monika</h1>
          <p>Web Developer | Prompt Engineer</p>
          <div className='social-profile'>
            <div className='social-media-box'>
              <a
                href='https://mail.google.com/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Gmail'
                className='mx-2'
              >
                <i className='fas fa-envelope fa-2x'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/monika12b/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='mx-2'

              >
                <i className='fab fa-linkedin fa-2x'></i>
              </a>
              <a
                href='https://www.github.com/Monika-ch/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github'
                className='mx-2'
              >
                <i className='fab fa-github fa-2x'></i>
              </a>
            </div>
            <div className='downloadResume-box'>
              <a
                href={url}
                download='Monika_Resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button type='button' className='btn downloadResume'>
                  Resume
                </button>
                <i className='fas fa-download fa-3x'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='personal-info-container container'>
        <div className='row'>
          <div className='col-3'>icon</div>
          <div className='col'>
            <p className='personal-info-title'>Location</p>
            <p className='personal-info'>Bellevue, WA, USA</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>icon</div>
          <div className='col'>
            <p className='personal-info-title'>Email</p>
            <p className='personal-info'>monika12b@gmail.com</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>icon</div>
          <div className='col'>
            <p className='personal-info-title'>Phone</p>
            <p className='personal-info'>+1-(425)-265-7756</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>icon</div>
          <div className='col'>
            <p className='personal-info-title'></p>
            <p className='personal-info'></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProfile;
