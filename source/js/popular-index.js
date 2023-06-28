import { products } from "./products-mocks.js";
import { renderProductCards} from "./create-product-card.js";

const MAX_POPULAR_CARDS_INDEX = 4;

const renderPopular = (items) => {
  let popularArr = [];
  items.forEach( item => {
    if(item.popular) {
    popularArr.push(item);
  }
  });
  renderProductCards(popularArr.slice(0, MAX_POPULAR_CARDS_INDEX), 'popular__list');
}

renderPopular(products);
