import React from "react";
import { gmail, linkedIn, github, resumeBtn } from '../constants/variables';
import "../styled-components/Footer.css";

export default function Footer() {
  // GOOGLE DRIVE PUBLIC LINK FOR RESUME DOWNLOAD
  // const resumeURL =
  //   "https://drive.google.com/uc?export=download&id=1rYE75B9b-efX3OS4cuT7FXttdOoG_ToTAD3njavx-1E";

  return (
    <React.Fragment>
      <section className='footer-section'>
        <div className='container footer-container'>

          {/* for large screen */}

          <div className='row footer-info d-none d-md-block'>
            <div className='col justify-content-center contact-box d-flex'>
              <div className='social-media-box mx-2'>
                {gmail}
              </div>
              <div className='social-media-box mx-2'>
                {linkedIn}
              </div>
              <div className='social-media-box mx-2'>
                {github}
              </div>
              <div className='downloadResume-box mx-2'>
                {resumeBtn}
              </div>
            </div>
          </div>

          {/* for small screen */}

          <div className='row footer-info d-block d-md-none'>
            <div className='col contact-box justify-content-center d-flex'>
              <div className='social-media-box'>
                {gmail}
              </div>
              <div className='social-media-box mx-3'>
                {linkedIn}
              </div>
              <div className='social-media-box'>
                {github}
              </div>
            </div>
            <div className='col justify-content-center downloadResume-box'>
              {resumeBtn}
            </div>
          </div>

          {/* <div className='row copyRightInfo'>
            <div className='col py-4 p-md-4'><a
              href='https://www.linkedin.com/in/monika12b/'
              className='profileLink'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Navigation to LinkedIn Profile'
            >
              ̶̶̶̶  «̶ ̶̶̶ ̶ «̶ ̶̶̶ 　　 ℘ortfolio of{" "}
              ൩onika
              {" "}
              Ⓒ 2o24 　　 ̶ ̶ ̶»̶ ̶̶̶ ̶ »̶ ̶̶̶</a>
            </div>
          </div> */}
          <div className='row copyRightInfo'>
            <div className='col py-4'><a
              href='https://www.linkedin.com/in/monika12b/'
              className='profileLink'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Navigation to LinkedIn Profile'
            >
              __ <span className="text-p-of-portfolio">p</span>ortfolio of{" "}
              ൩onika
              {" "}
              Ⓒ 2o24 __ </a>
            </div>
          </div>
          {/* <div className='row copyRightInfo-sm-screen'>
            <div className='col py-5 p-md-5'>
              <a
                href='https://www.linkedin.com/in/monika12b/'
                className='profileLink text-black'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Navigation to LinkedIn Profile'
              >»»———-　 ℘ortfolio of ൩onika Ⓒ 2o24 　———-««</a>
            </div>
          </div>  */}
        </div>
      </section>
    </React.Fragment >
  );
}
