import About from "./components/About";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Hobbies from "./components/Hobbies";
import HowItWorks from "./components/HowItWorks";



function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Hobbies />
      <HowItWorks />
    </div>
  );
}

export default App
