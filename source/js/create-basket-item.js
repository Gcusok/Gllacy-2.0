import {updateBasketData} from './basket.js';

const basketList = document.querySelector('.popover__basket-list');
const templateBasketItem = document.querySelector('#basket-item').content.querySelector('.popover__basket-item');
const similarListBasketItem = document.createDocumentFragment();

const createBasketItem = (src, srcset, mediaDesktop, title, price) => {
    const item = templateBasketItem.cloneNode(true);

    const picture = item.querySelector('picture');
    const source = item.querySelector('source');
    source.media = mediaDesktop;

    const img = item.querySelector('.popover__basket-item-img');
    img.src = src;
    img.srcset = srcset;
    img.alt = `${title}.`;

    source.appendChild(img);
    picture.appendChild(source);

    item.querySelector('.popover__basket-item-title').textContent = title;
    item.querySelector('.popover__basket-price-per-kg').textContent = `1 кг x ${price} ₽`;
    item.querySelector('.popover__basket-price-value').textContent = price;

    const removeButtont = item.querySelector('.popover__basket-button-close');
    removeButtont.classList.add('button');
    removeButtont.addEventListener('click', () => {
      item.remove();
      updateBasketData();
    })

    item.querySelector('.input-ice-cream-flavor').value = title;
    item.querySelector('.input-price').value = price;
    item.querySelector('.input-weight').value = '1кг';

    similarListBasketItem.append(item);
    basketList.append(similarListBasketItem);
    updateBasketData();
}

export {createBasketItem}
