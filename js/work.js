import { refs } from './refs.js';

refs.galleryEl.addEventListener('click', onOpenModal)
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.overley.addEventListener('click', onBackdropClick)

function onOpenModal(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    refs.opneModal.classList.add("is-open");
    window.addEventListener('keydown', onEscPress);
  
    const originalImg = event.target.dataset.source;
    const imageAlt = event.target.alt;
    
    openImageInModal(originalImg, imageAlt)    
}

function openImageInModal(image, alt) {
      refs.imageEl.src = image;
      refs.imageEl.alt = alt;
  }
  
function onCloseModal() {
    window.removeEventListener('keydown', onEscPress);
    refs.opneModal.classList.remove("is-open");
    onRemoveImageValue()
};
  
function onEscPress(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      onCloseModal();
    };
};
  
function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal()
  }
}
function onRemoveImageValue(src = "", alt = "") {
    refs.imageEl.src = src;
    refs.imageEl.alt = alt;
}