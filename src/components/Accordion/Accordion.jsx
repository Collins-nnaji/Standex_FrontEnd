import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './accordion.css';

const Accordion = ({ items, links }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    if (links && links[index]) {
      navigate(links[index]);
    }
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={item.title} className="item">
        <div
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
