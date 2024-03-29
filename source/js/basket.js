const basketCount = document.querySelector('.user-nav__link-basket-count');
const basket = document.querySelector('.user-nav__popover--basket');
const basketTitle = basket.querySelector('.popover__basket-title');
const basketForm = basket.querySelector('.popover__basket-form');
const basketListItem = basket.querySelector('.popover__basket-list');

let basketItems = basket.querySelectorAll('.popover__basket-item');
let total = basket.querySelector('.popover__basket-total-value');

// const listinerBasketData = () => {
//   if(window.location.toString().indexOf('index.html')>0 === true) {
//     renderSessionData();
//   }
//   let basketArr = [...basketItems];

//   basketArr.forEach((item, index) => {
//   basketArr[index] = item.innerHTML;
//   });

//   sessionStorage.basketData = JSON.stringify(basketArr);
//   basketListItem.innerHTML ='';
//   const renderSessionData = () => {
//     let jSon = JSON.parse(sessionStorage.basketData);
//     jSon.forEach(item => {
//       let element = document.createElement('li')
//       element.classList.add('popover__basket-item');
//       element.innerHTML = item;
//       basketListItem.append(element)
//     })
//   }

//   if(sessionStorage.basketData.length > 0) {
//     renderSessionData();
//     console.log(sessionStorage.basketData.length)
//   }


//   // console.log(JSON.parse(sessionStorage.basketData))
// }


const basketChekout = () => {
  basketItems.forEach(item => {
    let removeButtont = item.querySelector('.popover__basket-button-close');
    removeButtont.classList.add('button');
    removeButtont.addEventListener('click', () => {
      item.remove();
      updateBasketData();
      listinerBasketData();
    })
  })
}

const isEmpty = () => {
      basketListItem.children.length === 0 ?
      (
        basketForm.classList.add('visually-hidden'),
        basketTitle.classList.remove('popover__basket-title'),
        basketTitle.classList.add('popover__basket-title--empty'),
        basketTitle.textContent = "Ваша корзина пока пуста",
        basketCount.textContent = "Корзина",
        basket.style.padding = '48px 0',
        basket.style.minWidth = '288px'
      )
      : (
        basketForm.classList.remove('visually-hidden'),
        basketTitle.classList.add('popover__basket-title'),
        basketTitle.classList.remove('popover__basket-title--empty'),
        basketTitle.textContent = "Корзина",
        basketCount.textContent = `${basketListItem.children.length} товара`,
        basket.style.minWidth = '',
        basket.style.padding = ''
      );
};

const updateBasketPrice = () => {
  total.textContent = "0";
  let prices = basketListItem.querySelectorAll('.popover__basket-price-value');
  prices.forEach((item) =>
  total.textContent = Number(total.textContent) + Number(item.textContent)
  )
}

const updateBasketData = () => {
  isEmpty();
  updateBasketPrice();
}

const cleanerBasket = () => {
  basketListItem.innerHTML ="";
  isEmpty();
  updateBasketPrice();
}

updateBasketData();
basketChekout();

basketForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const basketData = new FormData(evt.target);

    fetch(
      'https://echo.htmlacademy.ru/',
      {
        method: 'POST',
        body: basketData,
      },
      cleanerBasket()
    )
});

export {updateBasketData};
