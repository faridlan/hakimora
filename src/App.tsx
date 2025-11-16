import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Header from './components/Header'
import ProjectsSection from './components/ProjectSection'
import ExperienceSection from './components/ExperienceSection'

function App() {
  return (
    <>
      <div className='min-h-screen bg-[#0d0d0d] text-gray-200 w-full'>
        <Header />
        <main className='w-full px-6 md:px-12 lg:px-20 xl:px-32'>
          <Hero />
          <ProjectsSection />
          <ExperienceSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App