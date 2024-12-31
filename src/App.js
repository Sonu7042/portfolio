import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";

function App() {
  return (
    <>
     
      <div>
      <Navbar />
        <Home />
        <About />
        <Skill />
        <Contact />
      </div>
    </>
  );
}

export default App;
