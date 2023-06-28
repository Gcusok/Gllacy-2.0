import {
  products
} from "./products-mocks.js";
import {
  renderProductCards
} from "./create-product-card.js";

const MAX_CARDS_IN_CATALOG = 12;

const renderCatalog = (items) => {

  renderProductCards(items, 'catalog__list')
}

renderCatalog(products);

console.log(renderCatalog)
