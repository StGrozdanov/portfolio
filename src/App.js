import AboutMe from "./components/AboutMe/AboutMe";
import AboutMeSkills from "./components/AboutMe/AboutMeSkills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <div id="about-me">
        <AboutMe />
        <AboutMeSkills />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;