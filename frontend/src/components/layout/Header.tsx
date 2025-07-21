import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { useTheme } from '../providers/ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguageContext();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: { es: 'Sobre mí', en: 'About' } },
    { id: 'experience', label: { es: 'Experiencia', en: 'Experience' } },
    { id: 'projects', label: { es: 'Proyectos', en: 'Projects' } },
    { id: 'contact', label: { es: 'Contacto', en: 'Contact' } },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">NN</span>
            </div>
            <span className="text-white font-medium text-lg md:text-xl hidden sm:block">
              Natalina Neves
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item.label[language]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-2 px-3 py-2 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Globe className="w-4 h-4 text-gray-300" />
                <span className="text-sm font-medium text-gray-300">
                  {language.toUpperCase()}
                </span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container-custom py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-3 px-4 rounded-xl hover:bg-white/5"
                  >
                    {item.label[language]}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 