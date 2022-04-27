import AboutMe from "./components/AboutMe/AboutMe";
import AboutMeSkills from "./components/AboutMe/AboutMeSkills";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <AboutMeSkills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;