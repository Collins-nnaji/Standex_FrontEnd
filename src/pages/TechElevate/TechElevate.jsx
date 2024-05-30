import React from 'react';
import './TechElevate.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordion/Accordion';

const TechElevate = () => {
  return (
    <div className="tech-elevate">
      <Header />
      <main>
        <h1>Tech Elevate</h1>
        <div className="courses">
          <div className="course">
            <img src="/images/Businessintelligence.svg" alt="Business Intelligence" className="course-img" />
            <Accordion 
              title="Power BI"
              content={[
                "Month 1: Power BI Overview and Components. In the first month, you will understand Power BI's ecosystem and components, learning to navigate the interface and create simple reports.",
                "Month 2: Data Import and Transformation. The second month focuses on data import and transformation techniques, empowering you to cleanse and prepare your data efficiently.",
                "Month 3: Report and Dashboard Creation. In the third month, you will build interactive visualizations that communicate insights effectively.",
                "Month 4: Advanced Data Visualization and Publishing. Finally, the fourth month covers advanced data visualization techniques and the process of publishing and sharing your reports securely."
              ]}
            />
            <Accordion 
              title="SQL"
              content={[
                "Month 1: SQL and Database Fundamentals. The first month covers SQL and database fundamentals, laying a strong foundation.",
                "Month 2: Basic SQL Queries. In the second month, students will write basic SQL queries to retrieve and manipulate data.",
                "Month 3: Advanced SQL Operations. The third month focuses on advanced SQL operations, including complex joins, subqueries, and indexing for performance optimization.",
                "Month 4: Database Design and Management. In the final month, students will delve into database design and management, learning best practices for creating scalable and efficient databases."
              ]}
            />
          </div>

          <div className="course">
            <img src="/images/Datascience.svg" alt="Data Science" className="course-img" />
            <Accordion 
              title="Machine Learning"
              content={[
                "Month 1: Machine Learning Basics. The first month covers the basics of machine learning concepts and algorithms, including supervised and unsupervised learning, along with model evaluation techniques.",
                "Month 2: Data Preprocessing and Feature Engineering. The second month is dedicated to data preprocessing and feature engineering, where students will handle missing data, perform feature scaling, and create new features to improve model performance.",
                "Month 3: Model Selection and Evaluation. In the third month, students will learn about model selection and evaluation, teaching how to choose the right algorithms and validate their models.",
                "Month 4: Advanced Techniques and Practical Applications. The final month explores advanced techniques and practical applications, including ensemble methods and deployment strategies."
              ]}
            />
            <Accordion 
              title="Large Language Models (LLM) and Prompt Engineering"
              content={[
                "Month 1: Introduction to Large Language Models and Their Architectures. The first month introduces the architectures and fundamental concepts of LLMs, including their capabilities and limitations.",
                "Month 2: Training, Fine-Tuning, and Applications of LLMs. In the second month, students will learn about training and fine-tuning LLMs, applying them to various tasks.",
                "Month 3: Basics and Design of Prompt Engineering. The third month focuses on the principles of prompt engineering, where students will design and optimize prompts for different applications.",
                "Month 4: Ethical Considerations, Bias Mitigation, and Evaluating Performance. The final month addresses ethical considerations, bias mitigation, and performance evaluation, ensuring that students can use LLMs responsibly and effectively."
              ]}
            />
          </div>

          <div className="course">
            <img src="/images/PowerPlatform.svg" alt="Power Platform" className="course-img" />
            <Accordion 
              title="Power Apps"
              content={[
                "Month 1: Power Apps Overview and Ecosystem. The first month covers an overview of Power Apps and its ecosystem, helping you understand its capabilities and use cases.",
                "Month 2: Canvas Apps Creation and Design. In the second month, you will design and build canvas apps, learning how to create user-friendly interfaces and connect to data sources.",
                "Month 3: Model-Driven Apps Development. The third month focuses on model-driven apps development, enabling you to create sophisticated applications with complex data models.",
                "Month 4: Formulas and Expressions, App Publishing and Management. In the final month, students will explore formulas and expressions, along with app publishing and management techniques to ensure their apps are secure and scalable."
              ]}
            />
            <Accordion 
              title="Power Automate"
              content={[
                "Month 1: Overview and Ecosystem. The first month provides an overview of Power Automate and its ecosystem, introducing you to the basics of flow creation and management.",
                "Month 2: Flow Logic and Controls. In the second month, you will delve into flow logic and controls, learning how to build complex workflows with conditions, loops, and approvals.",
                "Month 3: Error Handling and Optimization. The third month covers error handling and optimization, ensuring your workflows run smoothly and efficiently.",
                "Month 4: Security and Governance. The final month focuses on security and governance, teaching you how to implement best practices for securing your automated processes."
              ]}
            />
          </div>

          <div className="course">
            <img src="/images/EnterpriseArchitecture.svg" alt="Enterprise Architecture" className="course-img" />
            <Accordion 
              title="Solution Architecture"
              content={[
                "Month 1: Architecture Design Fundamentals. In the first month, students will learn about architecture design fundamentals, including key principles and methodologies.",
                "Month 2: Cloud Computing and Infrastructure. The second month focuses on cloud computing and infrastructure, teaching you how to design scalable and resilient systems.",
                "Month 3: Security and Compliance. The third month covers security and compliance, ensuring you understand how to protect your solutions and comply with industry standards.",
                "Month 4: Integration and Interoperability, Project Management and Communication. In the final month, students will explore integration and interoperability, along with project management and communication skills to effectively lead architecture projects."
              ]}
            />
            <Accordion 
              title="Data Architecture"
              content={[
                "Month 1: Data Architecture Fundamentals. The first month covers data architecture fundamentals, including key concepts and best practices.",
                "Month 2: Data Modeling and Design. The second month focuses on data modeling and design, teaching you how to create efficient and scalable data structures.",
                "Month 3: Data Integration and ETL Processes. In the third month, you will learn about data integration and ETL processes, ensuring smooth data flow across systems.",
                "Month 4: Data Storage and Database Management, Data Governance and Security. The final month covers data storage and database management, along with data governance and security, preparing you to handle large-scale data environments effectively."
              ]}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechElevate;
