import React from 'react';

function InfoTooltip(props) {
  const {name, title, isOpen, onClose} = props;

  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ''}`}>
      <div className="popup__container">
        <button className="popup__close"
          onClick={onClose}>
        </button>
        <h2 className="popup__title">{title}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
