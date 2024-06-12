import React from 'react';
import './Payment.css';

const Payment = ({ onPaymentSuccess }) => (
    <div className="payment-section">
        <h2>Purchase Your Learning Plan</h2>
        <div className="stripe-button">
            <stripe-buy-button
                buy-button-id="buy_btn_1PPrc5Rt3Wt49gX5TaXcGPFl"
                publishable-key="pk_live_51PNIDCRt3Wt49gX54QBZsb623PzO2rPuBZmcs3EvjEUNpIFZFU5EDEhtIA2ROScyYe4M99xWm5DP0O4rpdHeZqtM00ihCT1urk"
                on-success={onPaymentSuccess}
            ></stripe-buy-button>
        </div>
    </div>
);

export default Payment;
