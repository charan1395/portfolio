import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Journey from './components/Journey'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Journey />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
