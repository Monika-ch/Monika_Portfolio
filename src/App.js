import { Router, Routes, Route } from 'react-router-dom';
// import NavigationBar from './components/NavigationBar';
import Home from "./components/Home";
import HomePage from './components/HomePage';
import ExploreProjects from './components/ExploreProjects';
import KnowSkills from './components/KnowSkills';
import LookUpProfile from './components/LookUpProfile';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        {/* <NavigationBar /> */}
        <Home />
        <main>
          <Routes>
            {/* <Route path='/' element={<HomePage />} /> */}
            <Route path='/projects' element={<ExploreProjects />} />
            <Route path='/skills' element={<KnowSkills />} />
            <Route path='/profile' element={<LookUpProfile />} />

            {/* Add other routes here */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;

// import { Routes, Route, Link } from 'react-router-dom';
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <h1>Hi there!</h1>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/footer" element={<Footer />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;