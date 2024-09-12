import React from 'react';
import '../styled-components/StickyTest.css';

const StickyTest = () => {
  return (
    <div>
      <div className='div1'>I am header</div>

      <div className='div2'>I am Nav</div>

      <nav class="navbar sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="#">Sticky top</a>
      </nav>

      <div className='div3'>I am content</div>
    </div>
  )
}

export default StickyTest;