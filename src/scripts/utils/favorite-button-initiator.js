import FavoriteRestaurantIdb from '../data/favorite-restaurants-idb';
import {
  createUnfavoriteRestaurant,
  createFavoriteRestaurant,
} from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorite();
    } else {
      this._renderUnfavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderUnfavorite() {
    this._favoriteButtonContainer.innerHTML = createUnfavoriteRestaurant();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteRestaurant();

    const favoriteButton = document.querySelector('#unfavorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
