import { motion } from "framer-motion";
import { ChevronDown, Brain, Code, Rocket } from "lucide-react";
import { heroData } from "../../data/portfolio";
import { useLanguageContext } from "../../contexts/LanguageContext";
import GlassCard from '../ui/GlassCard';
import FuturisticButton from '../ui/FuturisticButton';
import HackerRain from '../ui/HackerRain';

const HeroSection = () => {
  const { language } = useLanguageContext();
  const isSpanish = language === 'es';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const expertiseAreas = [
    { 
      icon: Brain, 
      label: isSpanish ? 'Machine Learning' : 'Machine Learning', 
      color: 'from-violet-500 to-purple-500' 
    },
    { 
      icon: Code, 
      label: isSpanish ? 'LLMOps' : 'LLMOps', 
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      icon: Rocket, 
      label: isSpanish ? 'STT/TTS' : 'STT/TTS', 
      color: 'from-emerald-500 to-teal-500' 
    }
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-black text-white">
      <HackerRain />
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container-custom relative z-10 flex flex-col items-center">
        {/* Bloque central perfectamente centrado bajo header fijo (h-20 = 80px) */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full max-w-4xl mx-auto gap-8 pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-2"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">
              TechStars Tel Aviv '23 Alumna
            </span>
          </motion.div>
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight relative inline-block text-center"
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_24px_rgba(236,72,153,0.25)]">
              {heroData.name}
            </span>
            {/* Glow y glassmorfismo */}
            <span className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl -z-10"></span>
          </motion.h1>
          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-400 text-center"
          >
            {heroData.title[language]}
          </motion.h2>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light text-center"
          >
            {heroData.description[language]}
          </motion.p>
          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            {expertiseAreas.map((area) => (
              <GlassCard
                key={area.label}
                variant="accent"
                className="flex flex-col items-center justify-center aspect-[4/3] min-w-[180px] max-w-[220px] py-8 px-6 group"
              >
                <motion.div
                  className={`w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${area.color} shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-transform duration-300`}
                  whileHover={{ scale: 1.15, filter: 'brightness(1.2)' }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <area.icon className="w-7 h-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]" />
                </motion.div>
                <span className="text-lg font-semibold text-white mb-1 text-center drop-shadow-sm">
                  {area.label}
                </span>
              </GlassCard>
            ))}
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <FuturisticButton
              variant="primary"
              onClick={() => scrollToSection('projects')}
            >
              {heroData.ctaText[language]}
              <Rocket className="w-5 h-5" />
            </FuturisticButton>
            <FuturisticButton
              variant="accent"
              onClick={() => scrollToSection('contact')}
            >
              {isSpanish ? 'Contactar' : 'Contact'}
              <ChevronDown className="w-5 h-5" />
            </FuturisticButton>
          </motion.div>
        </div>
        {/* Métricas fuera del bloque central, justo debajo */}
      </div>
    </section>
  );
};

export default HeroSection; 