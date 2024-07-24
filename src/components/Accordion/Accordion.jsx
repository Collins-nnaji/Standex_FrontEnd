import React, { useState } from 'react';
import './accordion.css';

const Accordion = ({ title, content, isCardContent = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h3 className={`accordion-title ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        {title}
      </h3>
      {isOpen && (
        <div className="accordion-content">
          {isCardContent ? (
            content.map((card, index) => (
              <div key={index} className="card">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-details" dangerouslySetInnerHTML={{ __html: card.details }} />
                <p className="card-duration"><strong>Project Duration:</strong> {card.duration}</p>
                <p className="card-price"><strong>Price Range:</strong> {card.price}</p>
              </div>
            ))
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
