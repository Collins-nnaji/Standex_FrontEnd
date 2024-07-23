import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const GTAG_MANAGER_ID = 'G-LLNKZEJCBP';
const CLARITY_PROJECT_ID = 'nbx72bidni';

const insertAnalyticsScripts = () => {
  // Google Analytics
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_MANAGER_ID}`;
  gtagScript.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;  // Ensure gtag is defined before using it
    gtag('js', new Date());
    gtag('config', GTAG_MANAGER_ID);
  };
  document.head.appendChild(gtagScript);

  // Microsoft Clarity
  const clarityScript = document.createElement('script');
  clarityScript.type = 'text/javascript';
  clarityScript.text = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
  `;
  document.head.appendChild(clarityScript);
};

insertAnalyticsScripts();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
