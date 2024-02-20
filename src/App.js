// import Header from "./components/Header";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <main>
          <WelcomePage />
        </main>
        {/* <Header /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
