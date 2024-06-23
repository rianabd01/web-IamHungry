import { createRestaurantsList } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';

const Favorite = {
  async render() {
    return `
    <h1>Restoran Favorit</h1>
    <article class="menu-items">
      <p id="loading">Tunggu...</p>
    </article>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.menu-items');
    const loadingElement = document.querySelector('#loading');

    // Loading
    if (!restaurants || restaurants.length === 0) {
      loadingElement.style.display = 'block';
      loadingElement.innerText = 'Tidak ada data';
    } else {
      loadingElement.style.display = 'none';
    }

    // Error Handling
    try {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantsList(restaurant);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Favorite;
