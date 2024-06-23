import UrlParser from '../../routes/url-parser';
import { createRestaurantDetails } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurants-source';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant">
        <p id="loading">Tunggu...</p>
      </div>
      <div id="favorite-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetails(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const loadingElement = document.getElementById('loading');

    // Loading
    if (!restaurant) {
      loadingElement.style.display = 'block';
      loadingElement.innerText = 'Tidak ada data';
    } else {
      loadingElement.style.display = 'none';
    }

    // Error Handling
    try {
      restaurantContainer.innerHTML = createRestaurantDetails(restaurant);
      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favorite-container'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          address: restaurant.address,
          pictureId: restaurant.pictureId,
          menus: restaurant.menus,
          rating: restaurant.rating,
          customerReviews: restaurant.customerReviews,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Detail;
