/* eslint-disable comma-dangle */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-idb';
import * as testFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-container"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the movie has been liked', async () => {
    await testFactories.favoriteButtonPresenter({ id: 1 });

    expect(
      document.querySelector('[aria-label="unfavorite this restaurant"]')
    ).toBeTruthy();
  });

  it('should not display like widget when the movie has been liked', async () => {
    await testFactories.favoriteButtonPresenter({ id: 1 });

    expect(
      document.querySelector('[aria-label="favorite this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to remove liked movie from the list', async () => {
    await testFactories.favoriteButtonPresenter({ id: 1 });

    document
      .querySelector('[aria-label="unfavorite this restaurant"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  // eslint-disable-next-line max-len
  it('should not throw error when user click unlike widget if the unliked movie is not in the list', async () => {
    await testFactories.favoriteButtonPresenter({ id: 1 });

    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unfavorite this restaurant"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
