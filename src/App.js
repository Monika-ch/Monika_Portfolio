import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <div className="empty-div"></div>
        <Home />
      </div>
    </div>
  );
}

export default App;



// AN EXAMPLE APP ROUTING STRUCTURE

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