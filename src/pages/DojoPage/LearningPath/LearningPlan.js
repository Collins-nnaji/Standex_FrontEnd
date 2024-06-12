import React from 'react';
import './LearningPlan.css';

const LearningPlan = ({ pdfData }) => (
    <div className="learning-plan-section">
        <h2>Your Learning Plan</h2>
        {pdfData ? (
            <a href={URL.createObjectURL(pdfData)} download="learning_plan.pdf">Download Learning Plan</a>
        ) : (
            <p>Your learning plan will be available here after payment.</p>
        )}
    </div>
);

export default LearningPlan;
