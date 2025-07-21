import { motion } from "framer-motion";
import { Brain, Code, Rocket, Users, Target, Award, Zap, Globe, TrendingUp } from "lucide-react";
import { aboutData } from "../../data/portfolio";
import { useLanguageContext } from "../../contexts/LanguageContext";

const AboutSection = () => {
  const { language } = useLanguageContext();
  const isSpanish = language === 'es';

  const highlights = [
    {
      icon: Brain,
      title: isSpanish ? 'Machine Learning' : 'Machine Learning',
      description: isSpanish ? 'Especialista en algoritmos de IA y modelos de lenguaje' : 'Specialist in AI algorithms and language models',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Code,
      title: isSpanish ? 'LLMOps' : 'LLMOps',
      description: isSpanish ? 'Operaciones y despliegue de modelos de lenguaje' : 'Language model operations and deployment',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: isSpanish ? 'STT/TTS' : 'STT/TTS',
      description: isSpanish ? 'Speech-to-Text y Text-to-Speech avanzado' : 'Advanced Speech-to-Text and Text-to-Speech',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const stats = [
    { icon: Users, value: '5+', label: isSpanish ? 'Empresas' : 'Companies' },
    { icon: Target, value: '11+', label: isSpanish ? 'Años' : 'Years' },
    { icon: Award, value: 'TechStars', label: isSpanish ? 'Alumna' : 'Alumna' },
    { icon: TrendingUp, value: '100%', label: isSpanish ? 'Éxito' : 'Success' }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-300">
                {isSpanish ? 'Sobre mí' : 'About Me'}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
            >
              <span className="gradient-text">
                {isSpanish ? 'Líder Técnica en IA' : 'AI Technical Leader'}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              {aboutData.description[language]}
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-light mb-8 text-gradient-primary">
                {isSpanish ? 'Especializaciones' : 'Specializations'}
              </h3>
              
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="futuristic-card group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column - Stats & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="futuristic-card text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="futuristic-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-lg font-medium text-white">
                    {isSpanish ? 'Experiencia Global' : 'Global Experience'}
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {isSpanish 
                    ? 'He trabajado con equipos internacionales y liderado proyectos de IA en múltiples países, desarrollando soluciones escalables que impactan a millones de usuarios.'
                    : 'I have worked with international teams and led AI projects across multiple countries, developing scalable solutions that impact millions of users.'
                  }
                </p>
              </motion.div>

              {/* TechStars Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="futuristic-card bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      TechStars Tel Aviv '23
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {isSpanish 
                        ? 'Alumna del programa de aceleración más prestigioso del mundo'
                        : 'Alumna of the world\'s most prestigious acceleration program'
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 