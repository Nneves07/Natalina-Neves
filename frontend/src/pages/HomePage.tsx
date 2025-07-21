import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ContactSection from '../components/sections/ContactSection'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Natalina Neves - AI Technical Leader | TechStars Tel Aviv '23 Alumna</title>
        <meta name="description" content="AI Technical Leader con más de 11 años de experiencia en software engineering e inteligencia artificial. Especialista en LLMOps, STT, TTS y desarrollo de soluciones AI escalables." />
      </Helmet>

      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </motion.div>

      <Footer />
    </>
  )
}

export default HomePage 