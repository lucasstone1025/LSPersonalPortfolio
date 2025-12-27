import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
