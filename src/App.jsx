import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Ribbon } from './components/ui'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Ribbon
          color="ink"
          items={['C++', 'Python', 'PyTorch', 'FastAPI', 'Distributed Systems', 'Kafka', 'Docker', 'AWS', 'React', 'System Design']}
        />
        <About />
        <Skills />
        <Ribbon color="blood" items={['DON!!', 'Ship it', 'Set sail', 'Build · Break · Build', 'Adventure awaits', 'No code left behind']} />
        <Projects />
        <Achievements />
        <Certifications />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
