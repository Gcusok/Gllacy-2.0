import {createBasketItem} from './create-basket-item.js';

const templateProductCards = document.querySelector('#product-card').content.querySelector('.product-card');
const similarListProductsCard = document.createDocumentFragment();

const renderProductCards = (createdCard, productsListClass) => {
  const popularList = document.querySelector(`.${productsListClass}`)
  const items = popularList.querySelectorAll('.product-card');
  items.forEach((item) =>
    item.remove(item)
  );
  createdCard
  .forEach((({title, discription, price, src, srcset, mediaDesktop}) => {
      const item = templateProductCards.cloneNode(true);

      const picture = item.querySelector('picture');
      const source = item.querySelector('source');
      source.media = mediaDesktop;

      const img = item.querySelector('.product-card__image');
      img.src = src;
      img.srcset = srcset;
      img.alt = `${title}.`;

      source.appendChild(img);
      picture.appendChild(source);

      item.querySelector('.product-card__title').textContent = title;

      item.querySelector('.product-card__discriprion').textContent = discription;
      item.querySelector('.product-card__price').textContent = `${price} ₽/кг`;

      const basketButton = item.querySelector('.basket-button');

      basketButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        createBasketItem(src, srcset, mediaDesktop, title, price)
      })
      similarListProductsCard.append(item);
    }));
    popularList.append(similarListProductsCard);
};

export {renderProductCards};
