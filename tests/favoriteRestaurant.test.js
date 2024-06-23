/* eslint-disable comma-dangle */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-idb';
import * as testFactories from './helpers/testFactories';

describe('Adding Favorite Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-container"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await testFactories.favoriteButtonPresenter({ id: 1 });

    expect(
      document.querySelector('[aria-label="favorite this restaurant"]')
    ).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await testFactories.favoriteButtonPresenter({ id: 1 });

    expect(
      document.querySelector('[aria-label="unfavorite this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await testFactories.favoriteButtonPresenter({ id: 1 });

    document
      .getElementById('favorite-button')
      .dispatchEvent(new Event('click'));

    // Memastikan restoran berhasil disukai
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await testFactories.favoriteButtonPresenter({ id: 1 });

    // Tambahkan restoran dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document
      .querySelector('#favorite-button')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await testFactories.favoriteButtonPresenter({});

    document
      .querySelector('#favorite-button')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
