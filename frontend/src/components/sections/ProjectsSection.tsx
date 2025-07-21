import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Code, Star, Users, Zap } from "lucide-react";
import { projectsData } from "../../data/portfolio";
import { useLanguageContext } from "../../contexts/LanguageContext";

const ProjectsSection = () => {
  const { language } = useLanguageContext();
  const isSpanish = language === 'es';

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>

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
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-300">
                {isSpanish ? 'Proyectos' : 'Projects'}
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
                {isSpanish ? 'Proyectos Destacados' : 'Featured Projects'}
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
                ? 'Proyectos innovadores que demuestran mi experiencia en IA y desarrollo de software.'
                : 'Innovative projects that showcase my expertise in AI and software development.'
              }
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="futuristic-card overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-medium rounded-full">
                        <Star className="w-4 h-4" />
                        {isSpanish ? 'Destacado' : 'Featured'}
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                        {project.title[language]}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {project.description[language]}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-base font-medium text-white mb-3">
                        {isSpanish ? 'Tecnologías Utilizadas' : 'Technologies Used'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-lg font-bold text-white">10+</div>
                        <div className="text-xs text-gray-400">
                          {isSpanish ? 'Desarrolladores' : 'Developers'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-lg font-bold text-white">AI</div>
                        <div className="text-xs text-gray-400">
                          {isSpanish ? 'Powered' : 'Powered'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-lg font-bold text-white">TechStars</div>
                        <div className="text-xs text-gray-400">
                          {isSpanish ? 'Alumna' : 'Alumna'}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-medium rounded-2xl hover:bg-gray-100 transition-all duration-300"
                        >
                          <Eye className="w-4 h-4" />
                          {isSpanish ? 'Ver Demo' : 'View Demo'}
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          {isSpanish ? 'Ver Código' : 'View Code'}
                        </motion.a>
                      )}
                      {!project.liveUrl && !project.githubUrl && (
                        <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-gray-400 font-medium rounded-2xl">
                          <ExternalLink className="w-4 h-4" />
                          {isSpanish ? 'Proyecto Privado' : 'Private Project'}
                        </div>
                      )}
                    </div>
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
                {isSpanish ? '¿Interesado en colaborar?' : 'Interested in collaborating?'}
              </h3>
              <p className="text-gray-400 mb-4">
                {isSpanish 
                  ? 'Tengo experiencia en desarrollar soluciones de IA innovadoras y escalables.'
                  : 'I have experience developing innovative and scalable AI solutions.'
                }
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-2xl hover:bg-gray-100 transition-all duration-300"
              >
                {isSpanish ? 'Contactar' : 'Contact'}
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 