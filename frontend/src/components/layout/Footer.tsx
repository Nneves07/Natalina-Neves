import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Heart, ArrowUp, Github } from 'lucide-react';
import { useLanguageContext } from '../../contexts/LanguageContext';
import CredlyBadge from '../ui/CredlyBadge';

const Footer = () => {
  const { language } = useLanguageContext();
  const isSpanish = language === 'es';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/natalina-neves-da-silva/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      href: 'https://x.com/natneves7',
      label: 'X (Twitter)',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:nevesdasilvanatalina@gmail.com',
      label: 'Email',
      color: 'hover:text-emerald-400'
    },
    {
      icon: Github,
      href: 'https://github.com/Nneves07',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container-custom relative z-10 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">NN</span>
                </div>
                <span className="text-white font-medium text-xl">
                  Natalina Neves
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {isSpanish 
                  ? 'Líder técnica en IA especializada en Machine Learning, LLMOps y tecnologías de voz.'
                  : 'AI Technical Leader specialized in Machine Learning, LLMOps and voice technologies.'
                }
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h4 className="text-white font-medium mb-4">
                {isSpanish ? 'Navegación' : 'Navigation'}
              </h4>
              <div className="flex flex-col space-y-2">
                {['about', 'experience', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {section === 'about' && (isSpanish ? 'Sobre mí' : 'About')}
                    {section === 'experience' && (isSpanish ? 'Experiencia' : 'Experience')}
                    {section === 'projects' && (isSpanish ? 'Proyectos' : 'Projects')}
                    {section === 'contact' && (isSpanish ? 'Contacto' : 'Contact')}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <h4 className="text-white font-medium mb-4">
                {isSpanish ? 'Conectar' : 'Connect'}
              </h4>
              <div className="flex justify-center md:justify-end space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 glass-effect rounded-xl transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"
          />

          {/* Credly Badge - discreto y centrado */}
          <div className="flex justify-center my-4">
            <CredlyBadge />
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-sm flex items-center gap-2"
            >
              <span>
                © 2024 Natalina Neves. {isSpanish ? 'Todos los derechos reservados.' : 'All rights reserved.'}
              </span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-3 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300"
              aria-label={isSpanish ? 'Volver arriba' : 'Back to top'}
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;