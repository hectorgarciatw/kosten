import React from 'react';
import './WhatsAppButton.css'; // Asegúrate de tener este archivo de estilos

const WhatsAppButton = ({ phoneNumber, message }) => {
    // Encode URI component to handle spaces and special characters in the message
    const encodedMessage = encodeURIComponent(message);

    return (
        <div className="whatsapp-button-container">
            <a href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                <img src="/assets/images/wsp.png" alt="WhatsApp" />
                Consultas por Wsp
            </a>
        </div>
    );
};

export default WhatsAppButton;
