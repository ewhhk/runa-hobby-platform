import About from "./components/About";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Hobbies from "./components/Hobbies";
import HowItWorks from "./components/HowItWorks";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Hobbies />
      <HowItWorks />
      <Schedule />
    </div>
  );
}

export default App
