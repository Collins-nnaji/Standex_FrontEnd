import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Brain } from 'lucide-react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <div className="dojo-welcome-section">
      <div className="dojo-welcome-content">
        <motion.div 
          className="dojo-logo-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/DojoLogo.svg" alt="Dojo Logo" className="dojo-logo" />
        </motion.div>
        <div className="dojo-welcome-text">
          <motion.h1 
            className="dojo-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover Your Tech Path
          </motion.h1>
          <motion.p 
            className="dojo-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Unlock Your Potential with Dojo's AI-Powered Platform
          </motion.p>
          <motion.div 
            className="dojo-feature-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="dojo-feature-icon">
              <Code size={24} />
              <span>Learning Paths</span>
            </div>
            <div className="dojo-feature-icon">
              <Cpu size={24} />
              <span>Skill Assessments</span>
            </div>
            <div className="dojo-feature-icon">
              <Brain size={24} />
              <span>Career Advice</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;