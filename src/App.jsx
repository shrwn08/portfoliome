
import './App.css'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Certification />
      <Contact />
      <Footer />
    </>
  )
}

export default App
