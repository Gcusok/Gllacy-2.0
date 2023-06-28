import './basket.js';

const userNavList = document.querySelector('.user-nav');
const searchButton = userNavList.querySelector('.user-nav__link--search');
const searchPopover = userNavList.querySelector('.user-nav__popover--search');
const lkButton = userNavList.querySelector('.user-nav__link--entry');
const lkPopover = userNavList.querySelector('.user-nav__popover--lk');
const basketButton = userNavList.querySelector('.user-nav__link--basket');
const basketPopover = userNavList.querySelector('.user-nav__popover--basket');
const searchItem = userNavList.querySelector('.user-nav__item--search');
const lkItem = userNavList.querySelector('.user-nav__item--lk');
const basketItem = userNavList.querySelector('.user-nav__item--basket');


document.addEventListener('click', (evt) => {
  closePopover(searchItem, searchPopover, 'popover--search-open', evt);
  closePopover(lkItem, lkPopover, 'popover--entry-open', evt);
  closePopover(basketItem, basketPopover, 'popover--basket-open', evt);
})

const closePopover = (perentItem, popoverItem, className, evt) => {
  if(evt.target.classList.contains('popover__basket-button-close')) {
    return
  }
  if(!perentItem.contains(evt.target) ) {
    popoverItem.classList.remove(className);
  }
}

const showPopover = (button, popover, className) => {
  button.addEventListener('click', () => {
    popover.classList.toggle(className);
  })
}

showPopover(searchButton, searchPopover, 'popover--search-open');
showPopover(lkButton, lkPopover, 'popover--entry-open');
showPopover(basketButton, basketPopover, 'popover--basket-open');
