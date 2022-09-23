/* Открыть попап*/
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener ('keydown', closeByEsc);
};

/* Закрыть попап*/
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener ('keydown', closeByEsc);
};



export {openPopup, closePopup}