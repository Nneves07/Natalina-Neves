import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight, Zap } from "lucide-react";
import { experienceData } from "../../data/portfolio";
import { useLanguageContext } from "../../contexts/LanguageContext";

const ExperienceSection = () => {
  const { language } = useLanguageContext();
  const isSpanish = language === 'es';

  const formatDate = (dateString: string | null) => {
    if (!dateString) return isSpanish ? 'Presente' : 'Present';
    const [year, month] = dateString.split('-');
    const monthNames = isSpanish 
      ? ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const getDuration = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
    return diffYears === 1 ? '1 año' : `${diffYears} años`;
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>

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
                {isSpanish ? 'Experiencia' : 'Experience'}
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
                {isSpanish ? 'Experiencia Profesional' : 'Professional Experience'}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              {isSpanish 
                ? 'Más de una década liderando equipos y desarrollando soluciones de IA innovadoras.'
                : 'Over a decade leading teams and developing innovative AI solutions.'
              }
            </motion.p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="futuristic-card"
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-medium text-white">
                            {experience.position[language]}
                          </h3>
                          <p className="text-lg font-medium text-gradient-primary">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>•</span>
                          <span>{getDuration(experience.startDate, experience.endDate)}</span>
                        </div>
                      </div>
                    </div>
                    
                    {experience.current && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-emerald-400">
                          {isSpanish ? 'Actual' : 'Current'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-base font-medium text-white mb-3">
                      {isSpanish ? 'Responsabilidades Principales' : 'Key Responsibilities'}
                    </h4>
                    <ul className="space-y-2">
                      {experience.description[language].map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-base font-medium text-white mb-3">
                      {isSpanish ? 'Tecnologías' : 'Technologies'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-base font-medium text-white mb-3">
                      {isSpanish ? 'Logros Destacados' : 'Key Achievements'}
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements[language].map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="futuristic-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <h3 className="text-lg font-medium text-white mb-2">
                {isSpanish ? '¿Interesado en mi experiencia?' : 'Interested in my experience?'}
              </h3>
              <p className="text-gray-400 mb-4">
                {isSpanish 
                  ? 'Tengo experiencia en liderar equipos y desarrollar soluciones de IA escalables.'
                  : 'I have experience leading teams and developing scalable AI solutions.'
                }
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-2xl hover:bg-gray-100 transition-all duration-300"
              >
                {isSpanish ? 'Contactar' : 'Contact'}
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 