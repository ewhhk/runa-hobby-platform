import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Hobbies from "./components/Hobbies";
import HowItWorks from "./components/HowItWorks";
import Mentors from "./components/Mentors";
import Partners from "./components/Partners";
import PersonalityTest from "./components/PersonalityTest";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <About/>
      <Hobbies/>
      <HowItWorks/>
      <Schedule/>
      <PersonalityTest/>
      <Mentors/>
      <Partners/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App
