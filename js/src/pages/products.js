// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { store, setupStore } from '../store.js';
import display from '../displayProducts.js';
import { getElement, newAPI } from '../utils.js';
// import fetch products
import fetchProducts from '../fetchProducts.js';

const init = async () => {
  const loading = getElement('.page-loading');
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }

  //TODO: Uncomment this part
  store.forEach((element, index) => {
    // console.log(newAPI);
    element.image = newAPI[element.id].image;
    element.name = newAPI[element.id].name;
});

  // console.log(store);
  display(store, getElement('.products-container'));

  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);
  loading.style.display = 'none';
};

init();