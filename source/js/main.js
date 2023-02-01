import './slider.js';
import './header-user-nav.js';
import './user-forms.js';
import './modal.js';

import {popularIceCream} from './popular-items.js';
import {renderProductCards} from './create-product-card.js';

renderProductCards(popularIceCream, 'popular__list');
