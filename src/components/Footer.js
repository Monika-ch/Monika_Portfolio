import React from "react";
import "../styled-components/Footer.css";

export default function Footer() {
  // GOOGLE DRIVE PUBLIC LINK FOR RESUME DOWNLOAD
  // const url =
  //   "https://drive.google.com/uc?export=download&id=1rYE75B9b-efX3OS4cuT7FXttdOoG_ToTAD3njavx-1E";

  // AZURE PUBLIC LINK FOR RESUME DOWNLOAD
  const url =
    "https://monikaresume.blob.core.windows.net/monika-resume/ResumeNew.pdf";

  return (
    <React.Fragment>
      <section className='footer-section'>
        <div className='container footer-container'>
          <div className='row footer-info'>
            <div className='col contact d-flex'>
              {/* <a
                href='https://drive.google.com/open?export=download&id=1rYE75B9b-efX3OS4cuT7FXttdOoG_ToTAD3njavx-1E'
                target='_blank'
                rel='noopener noreferrer'
                download='MonikaResume.pdf'
              >
                Click here to download the PDF
              </a> */}
              <div className='social-media-box mx-2'>
                <a
                  href='https://mail.google.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Gmail'
                >
                  <i className='fas fa-envelope fa-2x'></i>
                </a>
              </div>
              <div className='social-media-box mx-2'>
                <a
                  href='https://www.linkedin.com/in/monika12b/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                >
                  <i className='fab fa-linkedin fa-2x'></i>
                </a>
              </div>
              <div className='social-media-box mx-2'>
                <a
                  href='https://www.github.com/Monika-ch/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Github'
                >
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </div>
              <div className='downloadResume-box mx-2'>
                <a
                  href={url}
                  download='Monika_Resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button type='button' className='btn downloadResume'>
                    Resume
                  </button>

                  <i className='fas fa-download'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='row copyRightInfo'>
            {/* <div className='col py-5 p-md-5'>
              »»———-　 ℘ortfolio of ൩onika Ⓒ 2o24 　———-««
            </div> */}
            <div className='col py-4 p-md-4'>
              ̶̶̶̶  «̶ ̶̶̶ ̶ «̶ ̶̶̶ 　　 ℘ortfolio of{" "}
              <a
                href='https://www.linkedin.com/in/monika12b/'
                className='profileLink'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Navigation to LinkedIn Profile'
              >
                ൩onika
              </a>{" "}
              Ⓒ 2o24 　　 ̶ ̶ ̶»̶ ̶̶̶ ̶ »̶ ̶̶̶  
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
