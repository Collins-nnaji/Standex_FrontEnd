import React from 'react';
import './homePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordion/Accordion';

const faqItems = [
  {
    title: 'What is Standex Digital?',
    content: 'Standex Digital is a digital solutions company providing services like web development, digital marketing, and more.'
  },
  {
    title: 'What services do you offer?',
    content: 'We offer a variety of services including cloud services, web and mobile app development, digital marketing, and data & AI solutions.'
  },
  {
    title: 'How can I contact you?',
    content: 'You can contact us through our website contact form or by calling our customer service number.'
  }
];

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <header className="homepage-header">
        <h1>Welcome to Standex Digital</h1>
      </header>
      <section className="homepage-content">
        <h2>Our Services</h2>
        <p>Explore our range of services including Dojo, Resume Builder, and more.</p>
      </section>
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <Accordion items={faqItems} />
      </section>
      <img src="/images/Home Page.svg" alt="Home" className="home-image" />
      <Footer />
    </div>
  );
};

export default HomePage;
