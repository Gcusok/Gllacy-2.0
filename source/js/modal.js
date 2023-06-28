import {isEscapeKey} from "./utils.js";

const body = document.body;
const contactButton = document.querySelector('.contacts__button');
const modal = document.querySelector('.modal');
const modalContainer = modal.querySelector('.modal__container');
const cancel = modal.querySelector('.close-button');
const modalButton = modal.querySelector('.modal__form-button');

const onCancelClick = () => {
closeModal();
}

const openModal = () => {
modal.classList.add('modal--open');
body.classList.add('modal-open');
document.addEventListener('keydown', onDocumentKeydown);
cancel.addEventListener('click', onCancelClick);
modal.addEventListener('click', onModalClick);
}

const onDocumentKeydown = (evt) => {
if(isEscapeKey(evt) && !evt.target.matches('.field') &!evt.target.matches('.modal__form-text-area')) {
  closeModal();
  }
}

const closeModal = () => {
modal.classList.remove('modal--open');
body.classList.remove('modal-open');
document.removeEventListener('keydown', onDocumentKeydown);
cancel.removeEventListener('click', onCancelClick);
modal.removeEventListener('click', onModalClick);
}

const onModalClick = (evt) => {
if(!modalContainer.contains(evt.target)) {
  closeModal();
}
}

contactButton.addEventListener('click', (evt) => {
evt.preventDefault();
openModal();
})

modalButton.addEventListener('submit', (evt) => {
evt.preventDefault();
closeModal();
})
