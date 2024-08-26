import React from 'react';
import { motion } from 'framer-motion';
import { FaRoute, FaClipboardCheck, FaTools, FaBook, FaBriefcase } from 'react-icons/fa';
import './FeatureGrid.css';

const features = [
  { name: "Learning Path", icon: FaRoute, color: "#4CAF50", description: "Generate your personalized learning path" },
  { name: "Skill Assessment", icon: FaClipboardCheck, color: "#2196F3", description: "Evaluate your current skill level" },
  { name: "Project Builder", icon: FaTools, color: "#FF9800", description: "Create custom projects tailored to your goals" },
  { name: "Resource Library", icon: FaBook, color: "#9C27B0", description: "Access curated learning resources" },
  { name: "Career Advice", icon: FaBriefcase, color: "#E91E63", description: "Get personalized career guidance" }
];

const FeatureCard = ({ feature, onClick }) => (
  <motion.div
    className="feature-card"
    style={{ '--accent-color': feature.color }}
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <feature.icon className="feature-icon" />
    <h3 className="feature-title">{feature.name}</h3>
    <p className="feature-description">{feature.description}</p>
    <span className="get-started">Get Started &rarr;</span>
  </motion.div>
);

const FeatureGrid = ({ onFeatureSelect }) => {
  return (
    <div className="feature-grid">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          feature={feature}
          onClick={() => onFeatureSelect(feature.name)}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;