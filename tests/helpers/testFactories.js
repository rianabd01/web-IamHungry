import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const favoriteButtonPresenter = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favorite-container'),
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { favoriteButtonPresenter };
