import { motion } from "framer-motion";
import { Brain, Code, Cloud, Database, Zap, TrendingUp, Star, Target } from "lucide-react";
import { skillsData } from "@/data/portfolio";

const SkillsSection = () => {
  const categories = [
    {
      id: 'ai',
      name: 'Inteligencia Artificial',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      id: 'database',
      name: 'Bases de Datos',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: TrendingUp,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'from-green-500 to-emerald-500';
      case 'advanced': return 'from-blue-500 to-cyan-500';
      case 'intermediate': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'expert': return 'w-full';
      case 'advanced': return 'w-4/5';
      case 'intermediate': return 'w-3/5';
      default: return 'w-2/5';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'expert': return 'Experto';
      case 'advanced': return 'Avanzado';
      case 'intermediate': return 'Intermedio';
      default: return 'Básico';
    }
  };

  const expertSkills = skillsData.filter(skill => skill.level === 'expert');
  const advancedSkills = skillsData.filter(skill => skill.level === 'advanced');

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white via-gray-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 md:mb-6"
          >
            <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </motion.div>

          <h2 className="heading-secondary mb-4 md:mb-6 bg-gradient-to-r from-dark-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>

          <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed px-4">
            Más de una década de experiencia en tecnologías de vanguardia, especializada en 
            inteligencia artificial y desarrollo de software escalable.
          </p>
        </motion.div>

        {/* Expertise Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-dark-700/50 text-center"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Star className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-1 md:mb-2">
              {expertSkills.length}
            </div>
            <div className="text-xs md:text-sm text-dark-600 dark:text-dark-400 font-medium">
              Nivel Experto
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-dark-700/50 text-center"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Target className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-1 md:mb-2">
              {advancedSkills.length}
            </div>
            <div className="text-xs md:text-sm text-dark-600 dark:text-dark-400 font-medium">
              Nivel Avanzado
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-dark-700/50 text-center"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Brain className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-1 md:mb-2">
              6
            </div>
            <div className="text-xs md:text-sm text-dark-600 dark:text-dark-400 font-medium">
              Especialidades AI
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-dark-700/50 text-center"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-1 md:mb-2">
              11+
            </div>
            <div className="text-xs md:text-sm text-dark-600 dark:text-dark-400 font-medium">
              Años de Experiencia
            </div>
          </motion.div>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-8 md:space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skillsData.filter(skill => skill.category === category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200/50 dark:border-dark-700/50"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 md:mb-8">
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base text-dark-600 dark:text-dark-400">
                      {categorySkills.length} tecnologías especializadas
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`p-4 md:p-6 rounded-2xl border ${category.borderColor} ${category.bgColor} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <div className="text-xl md:text-2xl">{skill.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-dark-900 dark:text-white text-sm md:text-base truncate">
                            {skill.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            <div className="text-xs md:text-sm text-dark-600 dark:text-dark-400">
                              {getLevelText(skill.level)}
                            </div>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-1.5 md:h-2 mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ 
                            width: getLevelWidth(skill.level) === 'w-full' ? '100%' :
                                   getLevelWidth(skill.level) === 'w-4/5' ? '80%' :
                                   getLevelWidth(skill.level) === 'w-3/5' ? '60%' : '40%'
                          }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}
                        ></motion.div>
                      </div>

                      {/* Level Badge */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-dark-500 dark:text-dark-400">
                          Nivel de dominio
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          skill.level === 'expert' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          skill.level === 'advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        }`}>
                          {getLevelText(skill.level)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white mb-3 md:mb-4">
              ¿Interesado en colaborar?
            </h3>
            <p className="text-sm md:text-base text-dark-600 dark:text-dark-400 mb-4 md:mb-6 max-w-2xl mx-auto px-4">
              Tengo experiencia en implementar soluciones de IA desde cero hasta producción. 
              ¿Tienes un proyecto desafiante? ¡Hablemos!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
            >
              Iniciar Conversación
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 