const userNavList = document.querySelector('.user-nav');
const searchButton = userNavList.querySelector('.user-nav__link--search');
const searchPopover = userNavList.querySelector('.user-nav__popover--search');
const lkButton = userNavList.querySelector('.user-nav__link--entry');
const lkPopover = userNavList.querySelector('.user-nav__popover--lk');
const basketButton = userNavList.querySelector('.user-nav__item--basket');
const basketPopover = userNavList.querySelector('.user-nav__popover--basket');


const showPopover = (button, popover, className) => {
  button.addEventListener('click', () => {
    popover.classList.toggle(className);
  })
}

showPopover(searchButton, searchPopover, 'popover--search-open');
showPopover(lkButton, lkPopover, 'popover--entry-open');
showPopover(basketButton, basketPopover, 'popover--basket-open');
