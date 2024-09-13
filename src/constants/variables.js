// *** URL Constants

// AZURE PUBLIC LINK FOR RESUME DOWNLOAD
export const resumeURL = "https://monikaresume.blob.core.windows.net/monika-resume/ResumeNew_v2.pdf";

// *** Icon Links

export const gmail = (
  <a
    href='https://mail.google.com/'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='Gmail'
  >
    <i className='fas fa-envelope fa-2x'></i>
  </a>
);

export const linkedIn = (
  <a
    href='https://www.linkedin.com/in/monika12b/'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='LinkedIn'
  >
    <i className='fab fa-linkedin fa-2x'></i>
  </a>
);

export const github = (
  <a
    href='https://www.github.com/Monika-ch/'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='Github'
  >
    <i className='fab fa-github fa-2x'></i>
  </a>
);

export const resumeBtn = (
  <a
    href={resumeURL}
    download='Monika_Resume.pdf'
    target='_blank'
    rel='noopener noreferrer'
  >
    <button type='button' className='btn downloadResume'>
      Resume
    </button>
    <i className='fas fa-download'></i>
  </a>
);