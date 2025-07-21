import { motion } from "framer-motion";
import { ChevronDown, Star, TrendingUp, Users, Award, Zap, Brain, Code, Rocket } from "lucide-react";
import { heroData } from "../../data/portfolio";
import { useLanguageContext } from "../../contexts/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguageContext();
  const isSpanish = language === 'es';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { 
      icon: TrendingUp, 
      value: '11+', 
      label: isSpanish ? 'Años' : 'Years', 
      color: 'text-emerald-400' 
    },
    { 
      icon: Users, 
      value: '5', 
      label: isSpanish ? 'Empresas' : 'Companies', 
      color: 'text-blue-400' 
    },
    { 
      icon: Award, 
      value: 'TechStars', 
      label: isSpanish ? 'Alumna' : 'Alumna', 
      color: 'text-purple-400' 
    },
    { 
      icon: Zap, 
      value: 'AI', 
      label: isSpanish ? 'Leader' : 'Leader', 
      color: 'text-orange-400' 
    }
  ];

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
    <section id="hero" className="min-h-screen relative overflow-hidden bg-black text-white pt-24">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container-custom relative z-10 min-h-screen flex flex-col justify-center py-8 md:py-0">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
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
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {heroData.name}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-400"
            >
              {heroData.title[language]}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light"
            >
              {heroData.description[language]}
            </motion.p>

            {/* Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center`}>
                    <area.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">{area.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-white text-black font-medium rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
              >
                {heroData.ctaText[language]}
                <Rocket className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3"
              >
                {isSpanish ? 'Contactar' : 'Contact'}
                <ChevronDown className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-8 h-8 ${metric.color} bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <metric.icon className="w-4 h-4" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-white/20 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 