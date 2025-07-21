import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, MessageCircle, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useLanguageContext } from "../../contexts/LanguageContext";

const ContactSection = () => {
  const { language } = useLanguageContext();
  const isSpanish = language === 'es';
  const [copied, setCopied] = useState(false);

  const contactMethods = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: isSpanish ? 'Conecta profesionalmente' : 'Connect professionally',
      href: 'https://www.linkedin.com/in/natalina-neves-da-silva/',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: Twitter,
      title: 'X (Twitter)',
      description: isSpanish ? 'Sígueme para actualizaciones' : 'Follow for updates',
      href: 'https://x.com/natneves7',
      color: 'from-blue-400 to-blue-500',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      description: isSpanish ? 'Envíame un mensaje directo' : 'Send me a direct message',
      href: 'mailto:nevesdasilvanatalina@gmail.com',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700'
    }
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nevesdasilvanatalina@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
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
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-300">
                {isSpanish ? 'Contacto' : 'Contact'}
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
                {isSpanish ? 'Conectemos' : 'Let\'s Connect'}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              {isSpanish 
                ? '¿Interesado en colaborar en proyectos de IA o simplemente quieres charlar sobre tecnología? ¡Me encantaría escuchar de ti!'
                : 'Interested in collaborating on AI projects or just want to chat about technology? I\'d love to hear from you!'
              }
            </motion.p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="futuristic-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} ${method.hoverColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-white mb-2 group-hover:text-gradient-primary transition-colors duration-300">
                      {method.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {method.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                      <span>{isSpanish ? 'Conectar' : 'Connect'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Email Copy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="futuristic-card bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-medium text-white mb-4">
                {isSpanish ? 'Email Directo' : 'Direct Email'}
              </h3>
              <p className="text-gray-400 mb-6">
                {isSpanish 
                  ? 'Prefieres escribir directamente? Copia mi email y envíame un mensaje.'
                  : 'Prefer to write directly? Copy my email and send me a message.'
                }
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={copyEmail}
                className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="text-white font-mono text-lg">
                  nevesdasilvanatalina@gmail.com
                </span>
                {copied ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                )}
              </motion.button>
              
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-sm mt-3"
                >
                  {isSpanish ? '¡Email copiado!' : 'Email copied!'}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-lg mb-6">
              {isSpanish 
                ? '¿Listo para crear algo increíble juntos?'
                : 'Ready to create something amazing together?'
              }
            </p>
            <motion.a
              href="https://www.linkedin.com/in/natalina-neves-da-silva/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-2xl hover:bg-gray-100 transition-all duration-300"
            >
              {isSpanish ? 'Iniciar Conversación' : 'Start Conversation'}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 